import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TransactionListComponent} from './components/transaction-list/transaction-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {StatsByDescriptionComponent} from "./components/stats-by-description/stats-by-description.component";
import {StoreModule} from "@ngrx/store";
import {CreditCardComponent} from "./components/credit-card/credit-card.component";
import { WeeklyComponent } from './components/weekly/weekly.component';
import { NgChartsModule } from 'ng2-charts';
import { TransactionViewerComponent} from "./components/transaction-viewer/transaction-viewer.component";
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionListComponent,
    StatsByDescriptionComponent,
    CreditCardComponent,
    WeeklyComponent,
    TransactionViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule,
    NgChartsModule,
    NgbDatepickerModule,
    StoreModule.forRoot({},{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
