import { hpLoadQuestions } from './../../state/app.state.actions';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.api.getAllQuestions().pipe(first()).subscribe(console.log);
    this.store.dispatch(hpLoadQuestions())
  }

}
