import LeaderboardClient from "./LeaderboardClient"

async function getInitialLeaderboards() {
  const [scoreRes, streakRes] = await Promise.all([
    fetch("http://localhost:3000/api/v1/leaderboard/score?limit=10", {
      cache: "no-store"
    }),
    fetch("http://localhost:3000/api/v1/leaderboard/streak?limit=10", {
      cache: "no-store"
    })
  ])

  const scoreData = await scoreRes.json()
  const streakData = await streakRes.json()

  return {
    scoreBoard: scoreData.leaderboard || [],
    streakBoard: streakData.leaderboard || []
  }
}

export default async function LeaderboardPage() {
  const { scoreBoard, streakBoard } = await getInitialLeaderboards()

  return (
    <LeaderboardClient
      initialScoreBoard={scoreBoard}
      initialStreakBoard={streakBoard}
    />
  )
}