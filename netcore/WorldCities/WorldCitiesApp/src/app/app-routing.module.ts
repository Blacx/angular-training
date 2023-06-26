import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CitiesComponent } from "./cities/cities.component";
import { EditCityComponent } from "./edit-city/edit-city.component";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'cities', component: CitiesComponent },
    { path: 'cities/:id', component: EditCityComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }