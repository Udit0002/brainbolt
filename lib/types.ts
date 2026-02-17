export interface QuestionResponse {
  questionId: string
  difficulty: number
  prompt: string
  choices: string[]
  sessionId: string
  stateVersion: number
  currentScore: number
  currentStreak: number
}