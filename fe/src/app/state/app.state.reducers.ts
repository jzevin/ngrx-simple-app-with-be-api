import { hpRetrieveQuestionsSuccess } from './app.state.actions';
import { createReducer, on } from '@ngrx/store';
import { AppUiState, AppState, AppQuizState } from './app.state.models';


const initialAppUiState:AppUiState = {
  isLoading: false
}
const initialAppQuizState:AppQuizState = {
  questions: [],
  answers: []
}

export const AppUiStateReducer = createReducer(
  initialAppUiState
)

export const AppQuizStateReducer = createReducer(
  initialAppQuizState,
  on(hpRetrieveQuestionsSuccess, (state, {questions}) => {
    return {
      ...state,
      questions
    }
  })
)