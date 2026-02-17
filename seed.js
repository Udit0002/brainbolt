import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const MONGODB_URI =
  "mongodb://mongo:27017/brainbolt?replicaSet=rs0"

const QuestionSchema = new mongoose.Schema({
  difficulty: Number,
  prompt: String,
  choices: [String],
  correctAnswerHash: String,
  tags: [String]
})

const Question =
  mongoose.models.Question ||
  mongoose.model("Question", QuestionSchema)

async function seed() {
  await mongoose.connect(MONGODB_URI)

  await Question.deleteMany({})

  for (let d = 1; d <= 10; d++) {
    for (let i = 0; i < 10; i++) {
      const answer = "A"

      await Question.create({
        difficulty: d,
        prompt: `Question ${i} difficulty ${d}`,
        choices: ["A", "B", "C", "D"],
        correctAnswerHash: await bcrypt.hash(answer, 10),
        tags: ["general"]
      })
    }
  }

  console.log("Seeding complete")
  process.exit()
}

seed()