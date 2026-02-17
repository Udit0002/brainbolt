"use client"

import { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"
import { Card } from "@/components/ui/Card"

const currentUserId = "507f1f77bcf86cd799439011"

type LeaderboardUser = {
  userId: string
  totalScore?: number
  maxStreak?: number
}

type Props = {
  initialScoreBoard: LeaderboardUser[]
  initialStreakBoard: LeaderboardUser[]
}

export default function LeaderboardClient({
  initialScoreBoard,
  initialStreakBoard
}: Props) {

  const [scoreBoard, setScoreBoard] = useState<LeaderboardUser[]>(initialScoreBoard)
  const [streakBoard, setStreakBoard] = useState<LeaderboardUser[]>(initialStreakBoard)
  const [myRank, setMyRank] = useState<number | null>(null)

  const prevRank = useRef<number | null>(null)
  const myRef = useRef<HTMLDivElement | null>(null)

  async function fetchLeaderboards() {
    const [scoreRes, streakRes] = await Promise.all([
      fetch("/api/v1/leaderboard/score?limit=10"),
      fetch("/api/v1/leaderboard/streak?limit=10")
    ])

    const scoreData = await scoreRes.json()
    const streakData = await streakRes.json()

    const scores = scoreData.leaderboard || []
    const streaks = streakData.leaderboard || []

    setScoreBoard(scores)
    setStreakBoard(streaks)

    const rankIndex = scores.findIndex(
      (u: LeaderboardUser) => u.userId === currentUserId
    )

    if (rankIndex !== -1) {
      const newRank = rankIndex + 1
      setMyRank(newRank)

      if (
        newRank <= 3 &&
        prevRank.current !== null &&
        prevRank.current > 3
      ) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        })
      }

      prevRank.current = newRank
    }
  }

  useEffect(() => {
    fetchLeaderboards()
    const interval = setInterval(fetchLeaderboards, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }, [scoreBoard])

  function rankEmoji(index: number) {
    if (index === 0) return "🥇"
    if (index === 1) return "🥈"
    if (index === 2) return "🥉"
    return `#${index + 1}`
  }

  return (
    <div className="max-w-6xl mx-auto mt-16 px-6 space-y-14 relative">

      {myRank && (
        <div className="fixed bottom-8 right-8 px-6 py-4 rounded-2xl
          bg-gradient-to-r from-indigo-500 to-purple-600
          shadow-2xl text-white font-bold text-lg animate-pulse z-50">
          🚀 Your Rank: #{myRank}
        </div>
      )}

      {/* SCORE BOARD */}
      <Card className="p-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">

        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          🏆 Global Score Rankings
        </h2>

        <div className="space-y-5">
          {scoreBoard.map((user, index) => {
            const isMe = user.userId === currentUserId
            const isTop = index < 3

            return (
              <div
                ref={isMe ? myRef : null}
                key={user.userId}
                className={`
                  flex justify-between items-center px-6 py-5 rounded-2xl
                  transition-all duration-500
                  ${isTop ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30" : ""}
                  ${isMe ? "ring-2 ring-indigo-500 scale-[1.03] shadow-xl" : ""}
                  hover:scale-[1.02]
                `}
              >
                <div className="flex items-center gap-5">
                  <span className={`text-2xl ${isTop ? "animate-pulse" : ""}`}>
                    {rankEmoji(index)}
                  </span>

                  <span className="text-white/70 text-sm tracking-wide">
                    {isMe ? "You" : `User ${user.userId.slice(-4)}`}
                  </span>
                </div>

                <span className="text-2xl font-bold text-indigo-400">
                  {user.totalScore}
                </span>
              </div>
            )
          })}
        </div>
      </Card>

      {/* STREAK BOARD */}
      <Card className="p-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">

        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          🔥 Current Streak Rankings
        </h2>

        <div className="space-y-5">
          {streakBoard.map((user, index) => {
            const isTop = index < 3
            const isMe = user.userId === currentUserId

            return (
              <div
                key={user.userId}
                className={`
                  flex justify-between items-center px-6 py-5 rounded-2xl
                  transition-all duration-500
                  ${isTop ? "bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-400/30" : ""}
                  ${isMe ? "ring-2 ring-orange-500 scale-[1.03] shadow-xl" : ""}
                  hover:scale-[1.02]
                `}
              >
                <div className="flex items-center gap-5">
                  <span className={`text-2xl ${isTop ? "animate-pulse" : ""}`}>
                    {rankEmoji(index)}
                  </span>

                  <span className="text-white/70 text-sm tracking-wide">
                    {isMe ? "You" : `User ${user.userId.slice(-4)}`}
                  </span>
                </div>

                <span className="text-2xl font-bold text-orange-400">
                  🔥 {user.maxStreak}
                </span>
              </div>
            )
          })}
        </div>
      </Card>

    </div>
  )
}