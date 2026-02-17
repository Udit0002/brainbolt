const MIN_DIFFICULTY = 1
const MAX_DIFFICULTY = 10
const MOMENTUM_THRESHOLD = 2
const MIN_STREAK_FOR_UPGRADE = 2

export function applyAdaptiveLogic(state: any, correct: boolean) {

  let {
    currentDifficulty,
    streak,
    maxStreak,
    momentum,
    totalScore,
    totalAnswers,
    correctAnswers
  } = state

  totalAnswers++

  if (correct) {
    streak++
    correctAnswers++
    momentum++
    if (streak > maxStreak) maxStreak = streak
  } else {
    streak = 0
    momentum--
  }

  if (momentum >= MOMENTUM_THRESHOLD && streak >= MIN_STREAK_FOR_UPGRADE) {
    currentDifficulty++
    momentum = 0
  }

  if (momentum <= -MOMENTUM_THRESHOLD) {
    currentDifficulty--
    momentum = 0
  }

  currentDifficulty = Math.max(
    MIN_DIFFICULTY,
    Math.min(MAX_DIFFICULTY, currentDifficulty)
  )

  const accuracy = correctAnswers / totalAnswers
  const difficultyWeight = currentDifficulty * 10
  const streakMultiplier = Math.min(1 + streak * 0.1, 2)

  const scoreDelta = correct
    ? difficultyWeight * streakMultiplier * accuracy
    : 0

  totalScore += scoreDelta

  return {
    currentDifficulty,
    streak,
    maxStreak,
    momentum,
    totalScore,
    totalAnswers,
    correctAnswers,
    scoreDelta
  }
}