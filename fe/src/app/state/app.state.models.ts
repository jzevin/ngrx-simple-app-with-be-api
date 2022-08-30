// Quiz
export type QuizQuestion = {
  id: number
  question: string
  subject?: string
  options: string[]
}
export type QuizAnswer = {
  questionId: number
  answerIndex: number
}
export type AppQuizState = {
  questions: QuizQuestion[]
  answers: QuizAnswer[]
}

// UI
export type AppUiState = {
  isLoading: boolean
}

export type AppState = {
  ui: AppUiState
  quiz: AppQuizState
}