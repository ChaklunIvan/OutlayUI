import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {StatsByDescriptionComponent} from "./components/stats-by-description/stats-by-description.component";
import {WeeklyComponent} from "./components/weekly/weekly.component";
import {TransactionViewerComponent} from "./components/transaction-viewer/transaction-viewer.component";
import {SettingsComponent} from "./components/settings/settings.component";
import { ChooseCardsComponent } from './components/choose-cards/choose-cards.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'weekly', component: WeeklyComponent},
  {path: 'raw', component: TransactionViewerComponent},
  { path: 'stats', component: StatsByDescriptionComponent },
  { path: 'choose', component: ChooseCardsComponent },
  { path: 'choose/:id', component: ChooseCardsComponent },
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
