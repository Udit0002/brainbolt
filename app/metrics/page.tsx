import { Card } from "@/components/ui/Card"

async function getMetrics() {
  const res = await fetch(
    "http://localhost:3000/api/v1/quiz/metrics?userId=507f1f77bcf86cd799439011",
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch metrics")
  }

  return res.json()
}

export default async function MetricsPage() {
  const data = await getMetrics()

  const {
    totalScore,
    streak,
    maxStreak,
    accuracy,
    difficultyHistogram,
    recentPerformance,
  } = data

  // 🔥 Convert accuracy ratio → percentage
  const accuracyPercent = (accuracy * 100).toFixed(2)

  // 🔥 Derive correct & wrong answers from recentPerformance
  const correctAnswers = recentPerformance.filter(
    (a: any) => a.correct
  ).length

  const wrongAnswers = recentPerformance.filter(
    (a: any) => !a.correct
  ).length

  return (
    <div className="max-w-5xl mx-auto mt-[var(--space-xl)] px-4">
      <h1 className="text-2xl font-semibold mb-[var(--space-lg)]">
        Performance Dashboard
      </h1>

      {/* ===== TOP METRIC GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-lg)]">

        <Card>
          <div className="text-sm text-white/60">Total Score</div>
          <div className="text-2xl font-bold mt-2">
            {Math.round(totalScore)}
          </div>
        </Card>

        <Card>
          <div className="text-sm text-white/60">Accuracy</div>
          <div className="text-2xl font-bold mt-2">
            {accuracyPercent}%
          </div>
        </Card>

        <Card>
          <div className="text-sm text-white/60">Current Streak</div>
          <div className="text-2xl font-bold mt-2">
            🔥 {streak}
          </div>
        </Card>

        <Card>
          <div className="text-sm text-white/60">Max Streak</div>
          <div className="text-2xl font-bold mt-2">
            🏆 {maxStreak}
          </div>
        </Card>

        <Card>
          <div className="text-sm text-white/60">Correct Answers</div>
          <div className="text-2xl font-bold mt-2 text-green-400">
            {correctAnswers}
          </div>
        </Card>

        <Card>
          <div className="text-sm text-white/60">Wrong Answers</div>
          <div className="text-2xl font-bold mt-2 text-red-400">
            {wrongAnswers}
          </div>
        </Card>

      </div>

      {/* ===== DIFFICULTY HISTOGRAM ===== */}
      <div className="mt-12">
        <h2 className="text-xl mb-4">Difficulty Breakdown</h2>

        <Card>
          {difficultyHistogram.map((item: any) => (
            <div key={item.difficulty} className="mb-4">
              <div className="flex justify-between text-sm">
                <span>Level {item.difficulty}</span>
                <span>{item.count}</span>
              </div>

              <div className="w-full bg-white/10 rounded h-2 mt-1">
                <div
                  className="bg-indigo-500 h-2 rounded transition-all"
                  style={{ width: `${item.count * 3}%` }}
                />
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* ===== RECENT PERFORMANCE ===== */}
      <div className="mt-12">
        <h2 className="text-xl mb-4">Recent Attempts</h2>

        <Card>
          {recentPerformance.map((item: any, index: number) => (
            <div
              key={index}
              className="flex justify-between py-2 border-b border-white/10 text-sm"
            >
              <span>D{item.difficulty}</span>

              <span
                className={
                  item.correct
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {item.correct ? "Correct" : "Wrong"}
              </span>

              <span>
                +{Math.round(item.scoreDelta)}
              </span>
            </div>
          ))}
        </Card>
      </div>

    </div>
  )
}