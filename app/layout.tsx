import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BrainBolt ⚡ Adaptive Quiz Engine",
  description: "Competitive adaptive quiz platform with live leaderboards",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1120] text-white`}
      >
        {/* Ambient Background Glow */}
        <div className="fixed -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />

        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

            {/* Brand */}
            <Link
              href="/"
              className="text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              BrainBolt ⚡
            </Link>

            {/* Links */}
            <div className="flex gap-8 text-white/70 text-sm font-medium">
              <Link href="/quiz" className="hover:text-white transition-colors">
                Quiz
              </Link>
              <Link href="/leaderboard" className="hover:text-white transition-colors">
                Leaderboard
              </Link>
              <Link href="/metrics" className="hover:text-white transition-colors">
                Metrics
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}