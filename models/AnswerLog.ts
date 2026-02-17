import mongoose from "mongoose"

const AnswerLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  difficulty: Number,
  answer: String,
  correct: Boolean,
  scoreDelta: Number,
  streakAtAnswer: Number,
  answeredAt: { type: Date, default: Date.now }
})

AnswerLogSchema.index({ userId: 1 })
AnswerLogSchema.index({ userId: 1, answeredAt: -1 })
AnswerLogSchema.index({ difficulty: 1 })

export const AnswerLog =
  mongoose.models.AnswerLog ||
  mongoose.model("AnswerLog", AnswerLogSchema)