import bcrypt from "bcryptjs"
import { Question } from "@/models/Question"
import { questions } from "@/lib/questions"

export async function seedQuestions() {
  const count = await Question.countDocuments()

  if (count > 0) {
    console.log("Questions already exist. Skipping seed.")
    return
  }

  console.log("Seeding real questions...")

  const formattedQuestions = []

  for (const q of questions) {
    const hash = await bcrypt.hash(q.correctAnswer, 10)

    formattedQuestions.push({
      difficulty: q.difficulty,
      prompt: q.question,
      choices: q.options,
      correctAnswerHash: hash,
      tags: []
    })
  }

  await Question.insertMany(formattedQuestions)

  console.log("Real question seeding complete.")
}