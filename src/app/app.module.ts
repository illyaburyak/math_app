import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {EquationComponent} from './equation/equation.component';
import { AnswerHeighlightDirective } from './answer-heighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHeighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
