import { createReducer } from '@ngrx/store';
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
  initialAppQuizState
)