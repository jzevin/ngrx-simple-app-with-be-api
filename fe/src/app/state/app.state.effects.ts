import { QuizQuestion } from './app.state.models';
import { ApiService } from './../services/api.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as appActions from "./app.state.actions";
import { catchError, EMPTY, map, mergeMap, tap } from 'rxjs';
@Injectable()
export class QuestionsEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.hpLoadQuestions),
      mergeMap(() => {
        return this.api.getAllQuestions().pipe(
          // tap((questions) => console.log('questions', questions)),
          map((questions) => appActions.hpRetrieveQuestionsSuccess({questions: questions as QuizQuestion[]})),
          catchError(()=>EMPTY)
        )
      })
    )
  )

  constructor(private actions$: Actions, private api: ApiService) {}
}