import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongo"
import { User } from "@/models/User"
import { UserState } from "@/models/UserState"
import { Question } from "@/models/Question"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const userIdParam = req.nextUrl.searchParams.get("userId")

    if (!userIdParam) {
      return NextResponse.json(
        { error: "userId required" },
        { status: 400 }
      )
    }

    // Ensure user exists
    let user = await User.findById(userIdParam)
    if (!user) {
      user = await User.create({ _id: userIdParam })
    }

    // Ensure user state exists
    let state = await UserState.findOne({ userId: user._id })

    if (!state) {
      state = await UserState.create({
        userId: user._id,
        currentDifficulty: 5,
        streak: 0,
        maxStreak: 0,
        totalScore: 0,
        momentum: 0
      })
    }

    // STREAK DECAY after 1 hour inactivity
    if (state.lastAnswerAt) {
      const oneHour = 60 * 60 * 1000
      const diff = Date.now() - new Date(state.lastAnswerAt).getTime()

      if (diff > oneHour && state.streak > 0) {
        state.streak = Math.max(0, state.streak - 1)
        await state.save()
      }
    }

    // Get question by difficulty
    const question = await Question.aggregate([
      { $match: { difficulty: state.currentDifficulty } },
      { $sample: { size: 1 } }
    ])

    if (!question.length) {
      return NextResponse.json(
        { error: "No question found" },
        { status: 404 }
      )
    }

    const q = question[0]

    return NextResponse.json({
  questionId: q._id.toString(),
  difficulty: q.difficulty,
  question: q.prompt,     
  options: q.choices,    
  stateVersion: state.stateVersion,
  currentScore: state.totalScore,
  currentStreak: state.streak
})

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}