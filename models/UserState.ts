import mongoose from "mongoose"

const UserStateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },

  currentDifficulty: { type: Number, default: 5 },
  streak: { type: Number, default: 0 },
  maxStreak: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },
  momentum: { type: Number, default: 0 },

  totalAnswers: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },

  lastQuestionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  lastAnswerAt: Date,

  stateVersion: { type: Number, default: 0 }
})
UserStateSchema.index({ userId: 1 }, { unique: true })
UserStateSchema.index({ totalScore: -1 })

export const UserState =
  mongoose.models.UserState ||
  mongoose.model("UserState", UserStateSchema)