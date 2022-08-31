import { selectAppQuizState, selectAppQuizStateQuestions } from './../../state/app.state.selectors';
import { QuizQuestion, AppState } from './../../state/app.state.models';
import { hpLoadQuestions } from './../../state/app.state.actions';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { first, Observable, map } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions$: Observable<QuizQuestion[]> = this.store.pipe(select(selectAppQuizStateQuestions));

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(hpLoadQuestions())
  }

}
