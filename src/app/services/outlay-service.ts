import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {StatsByDescription} from "../interfaces/stats-by-description";
import {ClientInfo} from "../interfaces/clientInfo";
import {WeeklyTransaction} from "../interfaces/weeklyTransaction";
import {WeeklyTransactionInfo} from "../interfaces/WeeklyTransactionInfo";
import {TransactionsRaw} from "../interfaces/transactionsRaw";
import {formatDate} from '@angular/common';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/AppState";
import {selectCardId} from "../store/selectors/card.selector";

@Injectable({
  providedIn: 'root'
})
export class OutlayService implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.cardId$ = this.store.select(selectCardId);
    // console.log(this.cardId$)
    // this.cardId$.subscribe((id) => {
    //   this.cardId = id;
    // });
  }

  getClientInfo() {
    let outlayUrl = 'https://localhost:7016/api/clients/personal-info';
    return this.http.get<ClientInfo>(outlayUrl);
  }

  getStatsByDescription(cardId:string, description: string) {
    // let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/by-description';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId", cardId);
    queryParams = queryParams.append("description", description);
    return this.http.get<StatsByDescription[]>(outlayUrl, {params: queryParams});
  }

  // getTransactionsGrouped() {
  //   let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
  //   let outlayUrl = 'https://localhost:7016/api/transactions/grouped';
  //
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append("clientCardId",cardId);
  //   return this.http.get<StatsByDescription[]>(outlayUrl, {params: queryParams});
  // }

  getTransactionsGrouped(cardId: string,dateFrom: Date | null, dateTo: Date | null) {
    // let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/grouped';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId", cardId);

    // If dateFrom is null, set it to one month before the current date
    if (!dateFrom) {
      dateFrom = new Date();
      dateFrom.setMonth(dateFrom.getMonth() - 1);
    }

    // If dateTo is null, set it to the current date
    if (!dateTo) {
      dateTo = new Date();
    }

    // Format dates to strings
    const formattedDateFrom = formatDate(dateFrom, 'yyyy-MM-dd', 'en-US');
    const formattedDateTo = formatDate(dateTo, 'yyyy-MM-dd', 'en-US');

    queryParams = queryParams.append("dateFrom", formattedDateFrom);
    queryParams = queryParams.append("dateTo", formattedDateTo);

    return this.http.get<StatsByDescription[]>(outlayUrl, {params: queryParams});
  }

  getTransactionsRaw() {
    let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/by-period';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId", cardId);
    return this.http.get<TransactionsRaw[]>(outlayUrl, {params: queryParams});
  }

  fetchLatestTransactions() {
    let clientId = 'ff1772ba-24fa-42e7-96c9-0637f74196c7';
    let externalCardId = 'XzNHt-dLmlqphOajbo0saA';
    let outlayUrl = 'https://localhost:7016/api/transactions/latest';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientId", clientId);
    queryParams = queryParams.append("externalCardId", externalCardId);
    return this.http.get(outlayUrl, {params: queryParams});
  }

  getWeeklyTransactions() {
    let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/weekly';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId", cardId);
    queryParams = queryParams.append("skipWeeks", 1);
    queryParams = queryParams.append("weeksCount", 10);
    let result = this.http.get<WeeklyTransactionInfo[]>(outlayUrl, {params: queryParams, responseType: 'json'})
    console.log(outlayUrl)
    return result;
  }

  registerUser(clientToken: string) {
    let outlayUrl = `https://localhost:7016/api/clients/register?clientToken=${clientToken}`;

    let queryParams = new HttpParams();
    return this.http.post(outlayUrl, {params: queryParams, responseType: 'json'})
  }
}
