import { NextRequest, NextResponse } from "next/server"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

import { connectDB } from "@/lib/mongo"
import { redis } from "@/lib/redis"
import { applyAdaptiveLogic } from "@/lib/adaptive"

import { UserState } from "@/models/UserState"
import { Question } from "@/models/Question"
import { AnswerLog } from "@/models/AnswerLog"

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()

    const {
      userId,
      questionId,
      answer,
      stateVersion,
      answerIdempotencyKey
    } = body

    if (!userId || !questionId || !answer || !answerIdempotencyKey) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    // 🧠 Idempotency check
    const existingResponse = await redis.get(`idem:${answerIdempotencyKey}`)
    if (existingResponse) {
      return NextResponse.json(JSON.parse(existingResponse))
    }

    const session = await mongoose.startSession()

    let responsePayload: any

    await session.withTransaction(async () => {

      const state = await UserState.findOne({ userId }).session(session)

      if (!state) {
        throw new Error("User state not found")
      }

      // 🔒 State version locking
      if (state.stateVersion !== stateVersion) {
        throw new Error("State version mismatch")
      }

      const question = await Question.findById(questionId).session(session)
      if (!question) {
        throw new Error("Question not found")
      }

      const correct = await bcrypt.compare(
        answer,
        question.correctAnswerHash
      )

      const updated = applyAdaptiveLogic(state.toObject(), correct)

      // Update state
      const scoreDelta = Math.floor(updated.scoreDelta)
    const totalScore = Math.floor(updated.totalScore)

      state.currentDifficulty = updated.currentDifficulty
      state.streak = updated.streak
      state.maxStreak = updated.maxStreak
      state.momentum = updated.momentum
      state.totalScore = totalScore
      state.totalAnswers = updated.totalAnswers
      state.correctAnswers = updated.correctAnswers
      state.lastAnswerAt = new Date()
      state.stateVersion += 1

      await state.save({ session })

      // Log answer
      await AnswerLog.create([{
        userId,
        questionId,
        difficulty: question.difficulty,
        answer,
        correct,
        scoreDelta: updated.scoreDelta,
        streakAtAnswer: updated.streak
      }], { session })

      // 🔥 Update Redis Leaderboards (LIVE)

        await redis.zadd(
        "leaderboard:score",
        totalScore,
        userId.toString()
        )

        await redis.zadd(
        "leaderboard:streak",
        updated.streak,  // current streak
        userId.toString()
        )

        const rankScore =
        await redis.zrevrank("leaderboard:score", userId.toString())

        const rankStreak =
        await redis.zrevrank("leaderboard:streak", userId.toString())

      responsePayload = {
        correct,
        newDifficulty: updated.currentDifficulty,
        newStreak: updated.streak,
        scoreDelta,
        totalScore,
        stateVersion: state.stateVersion,
        leaderboardRankScore: rankScore !== null ? rankScore + 1 : null,
        leaderboardRankStreak: rankStreak !== null ? rankStreak + 1 : null
      }

    })

    session.endSession()

    // Save idempotency result for 5 minutes
    await redis.set(
      `idem:${answerIdempotencyKey}`,
      JSON.stringify(responsePayload),
      "EX",
      300
    )

    return NextResponse.json(responsePayload)

  } catch (error: any) {
    console.error(error)
    return NextResponse.json(
      { error: error.message || "Internal Error" },
      { status: 500 }
    )
  }
}