import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongo"
import { UserState } from "@/models/UserState"
import { AnswerLog } from "@/models/AnswerLog"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { error: "userId required" },
        { status: 400 }
      )
    }

    // Get user state
    const state = await UserState.findOne({ userId })

    if (!state) {
      return NextResponse.json(
        { error: "User state not found" },
        { status: 404 }
      )
    }

    // Accuracy
    const accuracy =
      state.totalAnswers > 0
        ? state.correctAnswers / state.totalAnswers
        : 0

    // Difficulty histogram
    const histogram = await AnswerLog.aggregate([
      { $match: { userId: state.userId } },
      {
        $group: {
          _id: "$difficulty",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          difficulty: "$_id",
          count: 1,
          _id: 0
        }
      }
    ])

    // Recent performance (last 10 answers)
    const recentPerformance = await AnswerLog.find({
      userId: state.userId
    })
      .sort({ answeredAt: -1 })
      .limit(10)
      .select("difficulty correct scoreDelta answeredAt -_id")

    return NextResponse.json({
      currentDifficulty: state.currentDifficulty,
      streak: state.streak,
      maxStreak: state.maxStreak,
      totalScore: state.totalScore,
      accuracy,
      difficultyHistogram: histogram,
      recentPerformance
    })

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}