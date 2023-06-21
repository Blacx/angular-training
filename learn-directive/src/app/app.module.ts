import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TurnBoldDirective } from './turn-bold.directive';
import { TurnBoldNewDirective } from './turn-bold-new.directive';
import { TurnHighlightDirective } from './turn-highlight.directive';
import { CustomIfDirective } from './custom-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    TurnBoldDirective,
    TurnBoldNewDirective,
    TurnHighlightDirective,
    CustomIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
