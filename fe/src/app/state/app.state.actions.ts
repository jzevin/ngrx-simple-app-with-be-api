import { QuizQuestion } from './app.state.models';
import { createAction, props } from "@ngrx/store";


export const hpLoadQuestions = createAction('[Home Page] get all questions')
export const hpRetrieveQuestionsSuccess = createAction(
  '[Home Page] retrieve questions success',
  props<{questions: QuizQuestion[]}>()
)

export const setIsLoading = createAction('[App] set is loading', props<{isLoading: boolean}>())