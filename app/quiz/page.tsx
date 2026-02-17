"use client"

import { useEffect, useState, useCallback } from "react"
import { getNextQuestion, submitAnswer } from "@/lib/api"

type Question = {
  questionId: string
  difficulty: number
  question: string
  options: string[]
  stateVersion: number
}

export default function QuizPage() {
  const userId = "507f1f77bcf86cd799439011"

  const [question, setQuestion] = useState<Question | null>(null)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null)
  const [questionCount, setQuestionCount] = useState(0)

  const loadQuestion = useCallback(async () => {
    setLoading(true)
    setSelected(null)
    setFeedback(null)

    const data = await getNextQuestion(userId)
    setQuestion(data)
    setQuestionCount(prev => prev + 1)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadQuestion()
  }, [loadQuestion])

  async function handleAnswer(choice: string) {
    if (!question || selected) return

    setSelected(choice)

    const result = await submitAnswer({
      userId,
      questionId: question.questionId,
      answer: choice,
      stateVersion: question.stateVersion,
      answerIdempotencyKey: crypto.randomUUID(),
    })

    setFeedback(result.correct ? "correct" : "wrong")

    setTimeout(() => {
      loadQuestion()
    }, 1200)
  }

  if (loading || !question) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl bg-black">
        ⚡ Generating next challenge...
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-200px] left-[-200px] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full bottom-[-200px] right-[-200px] animate-pulse" />

      {/* Quiz Card */}
      <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          
          <div className="px-4 py-1 rounded-full text-sm font-semibold 
              bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg">
            Difficulty {question.difficulty}
          </div>

          <div className="text-white/60 text-sm tracking-wide">
            Question #{questionCount}
          </div>
        </div>

        {/* Difficulty Progress Bar */}
        <div className="mb-8">
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500"
              style={{ width: `${question.difficulty * 10}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10 leading-relaxed">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-5">
          {question.options.map((option, index) => {
            const isSelected = selected === option
            const isCorrect = feedback === "correct" && isSelected
            const isWrong = feedback === "wrong" && isSelected

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={!!selected}
                className={`
                  relative w-full py-4 rounded-2xl text-white font-medium
                  transition-all duration-300 overflow-hidden
                  ${
                    isCorrect
                      ? "bg-green-500 scale-105 ring-2 ring-green-300"
                      : isWrong
                      ? "bg-red-500 scale-105 ring-2 ring-red-300"
                      : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 hover:shadow-2xl"
                  }
                `}
              >
                <span className="relative z-10">{option}</span>

                {/* Light Sweep Effect */}
                {!selected && (
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            )
          })}
        </div>

        {/* Feedback Message */}
        {feedback && (
          <div className={`mt-8 text-center text-lg font-semibold animate-pulse ${
            feedback === "correct" ? "text-green-400" : "text-red-400"
          }`}>
            {feedback === "correct"
              ? "Correct! Brilliant move."
              : "Not quite. Recalibrating difficulty..."}
          </div>
        )}
      </div>
    </div>
  )
}