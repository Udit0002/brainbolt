import { NextRequest, NextResponse } from "next/server"
import { redis } from "@/lib/redis"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const limitParam = searchParams.get("limit")
    const userId = searchParams.get("userId")

    const limit = limitParam ? parseInt(limitParam) : 10

    const results = await redis.zrevrange(
      "leaderboard:score",
      0,
      limit - 1,
      "WITHSCORES"
    )

    const leaderboard = []

    for (let i = 0; i < results.length; i += 2) {
      leaderboard.push({
        userId: results[i],
        totalScore: parseFloat(results[i + 1])
      })
    }

    let currentUserRank = null

    if (userId) {
      const rank = await redis.zrevrank("leaderboard:score", userId)
      if (rank !== null) {
        currentUserRank = rank + 1
      }
    }

    return NextResponse.json({
      leaderboard,
      currentUserRank
    })

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}