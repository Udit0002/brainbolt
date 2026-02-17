import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const rateLimit = new Map<string, number[]>()

export function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "global"
  const now = Date.now()

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [])
  }

  const timestamps = rateLimit
    .get(ip)!
    .filter((t) => now - t < 60000)

  if (timestamps.length >= 100) {
    return new NextResponse("Too Many Requests", { status: 429 })
  }

  timestamps.push(now)
  rateLimit.set(ip, timestamps)

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}