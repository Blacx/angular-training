import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { XssComponent } from './xss/xss.component';
//import { BypassXssSanitizer } from './xss/bypasssinitizer.service';

@NgModule({
  declarations: [
    AppComponent,
    XssComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'TOKEN',
      headerName: 'TOKEN'
    })
  ],
  providers: [
    //BypassXssSanitizer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
