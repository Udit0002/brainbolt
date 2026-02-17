export async function getNextQuestion(userId: string) {
  const res = await fetch(
    `/api/v1/quiz/next?userId=${userId}`,
    { cache: "no-store" }
  )
  return res.json()
}

export async function submitAnswer(payload: any) {
  const res = await fetch("/api/v1/quiz/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  return res.json()
}