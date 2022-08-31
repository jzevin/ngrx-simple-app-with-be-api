import { QuizQuestion } from './app.state.models';
import { createAction, props } from "@ngrx/store";


export const hpLoadQuestions = createAction('[Home Page] get all questions')
export const hpRetrieveQuestionsSuccess = createAction(
  '[Home Page] init questions',
  props<{questions: QuizQuestion[]}>()
)