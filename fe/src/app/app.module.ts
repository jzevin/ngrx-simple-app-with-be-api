import { QuestionsEffects } from './state/app.state.effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppQuizStateReducer, AppUiStateReducer } from './state/app.state.reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ ui: AppUiStateReducer, quiz: AppQuizStateReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([QuestionsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
