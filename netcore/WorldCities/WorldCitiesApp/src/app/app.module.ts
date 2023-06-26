import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { NavNmenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EditCityComponent } from './edit-city/edit-city.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CityService } from './city.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    NavNmenuComponent,
    EditCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
