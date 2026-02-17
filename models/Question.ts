import mongoose from "mongoose"

const QuestionSchema = new mongoose.Schema({
  difficulty: { type: Number, required: true },
  prompt: { type: String, required: true },
  choices: [{ type: String }],
  correctAnswerHash: { type: String, required: true },
  tags: [{ type: String }]
})

QuestionSchema.index({ difficulty: 1 })

export const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema)