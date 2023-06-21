import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // mendaftarkan routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
