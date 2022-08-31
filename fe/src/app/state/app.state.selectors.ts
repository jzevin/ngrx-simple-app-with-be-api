import { AppState, AppQuizState, AppUiState } from './app.state.models';
import { createFeatureSelector, createSelector, State } from "@ngrx/store";

export const selectQuizFeature = createFeatureSelector<AppQuizState>('quiz');

export const selectUiFeature = createFeatureSelector<AppUiState>('ui');

export const selectAppQuizState = createSelector(
  selectQuizFeature, // this is needed because When using strict mode, the select method will expect to be passed a selector whose base selects from an object.
  (quizState: AppQuizState) => quizState
)

export const selectAppQuizStateQuestions = createSelector(
  selectAppQuizState,
  (quizState: AppQuizState) => quizState.questions
)

export const selectAppUiStateLoading = createSelector(
  selectUiFeature,
  (uiState: AppUiState) => uiState.isLoading
)