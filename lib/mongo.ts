import mongoose from "mongoose"

import { seedQuestions } from "@/lib/seed"
import "@/models/Question"
import "@/models/UserState"
import "@/models/AnswerLog"

declare global {
  var mongooseGlobal: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}

if (!global.mongooseGlobal) {
  global.mongooseGlobal = { conn: null, promise: null }
}

export async function connectDB() {
    console.log("Mongo URI:", process.env.MONGODB_URI)
  if (global.mongooseGlobal.conn) {
    return global.mongooseGlobal.conn
  }

  if (!global.mongooseGlobal.promise) {
    const MONGODB_URI = process.env.MONGODB_URI

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI not defined")
    }

    global.mongooseGlobal.promise = mongoose.connect(MONGODB_URI)
  }

  global.mongooseGlobal.conn = await global.mongooseGlobal.promise

  await mongoose.connection.syncIndexes()
  await seedQuestions()

  return global.mongooseGlobal.conn
}