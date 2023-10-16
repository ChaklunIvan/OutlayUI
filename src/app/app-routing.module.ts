import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {StatsByDescriptionComponent} from "./components/stats-by-description/stats-by-description.component";
import {WeeklyComponent} from "./components/weekly/weekly.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'weekly', component: WeeklyComponent},
  {path: 'stats', component: StatsByDescriptionComponent},
  {
    path : '', redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
