import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6">

      {/* ===== HERO SECTION ===== */}
      <section className="text-center mt-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          BrainBolt 🧠⚡
        </h1>

        <p className="mt-6 text-white/70 text-lg">
          An adaptive quiz engine that dynamically adjusts difficulty,
          tracks streaks, measures performance, and ranks users in real-time.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/quiz">
            <Button variant="primary">Start Quiz</Button>
          </Link>

          <Link href="/leaderboard">
            <Button variant="secondary">View Leaderboard</Button>
          </Link>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="mt-28 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card>
            <h3 className="text-lg font-semibold mb-3">
              Adaptive Difficulty
            </h3>
            <p className="text-white/70 text-sm">
              Difficulty increases with correct streaks and decreases on mistakes,
              ensuring personalized challenge progression.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3">
              Real-Time Leaderboard
            </h3>
            <p className="text-white/70 text-sm">
              Users are ranked by total score and streak performance,
              updated instantly via optimized database queries.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3">
              Performance Metrics
            </h3>
            <p className="text-white/70 text-sm">
              Track accuracy, streaks, difficulty distribution,
              and recent attempts in a structured analytics dashboard.
            </p>
          </Card>

        </div>
      </section>

      {/* ===== SYSTEM DESIGN INFO ===== */}
      <section className="mt-28 w-full max-w-4xl">
        <Card>
          <h2 className="text-xl font-semibold mb-4">
            System Architecture
          </h2>

          <div className="space-y-3 text-sm text-white/70">
            <p>
              • Built with Next.js 16 (App Router)
            </p>
            <p>
              • MongoDB Replica Set with optimized indexing
            </p>
            <p>
              • Redis caching for leaderboard efficiency
            </p>
            <p>
              • Fully containerized with Docker
            </p>
            <p>
              • Adaptive scoring algorithm with streak multiplier
            </p>
          </div>
        </Card>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="mt-28 mb-24 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to test your brainpower?
        </h2>

        <div className="mt-8">
          <Link href="/quiz">
            <Button variant="primary">
              Begin Challenge
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}