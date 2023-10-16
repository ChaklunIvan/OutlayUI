import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {StatsByDescription} from "../interfaces/stats-by-description";
import {ClientInfo} from "../interfaces/clientInfo";
import {WeeklyTransaction} from "../interfaces/weeklyTransaction";
import {WeeklyTransactionInfo} from "../interfaces/WeeklyTransactionInfo";

@Injectable({
  providedIn: 'root'
})
export class OutlayService {

  constructor(private http: HttpClient) {
  }

  getClientInfo() {
    let outlayUrl = 'https://localhost:7016/api/clients/personal-info';
    return this.http.get<ClientInfo>(outlayUrl);
  }

  getStatsByDescription(description: string) {
    let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/by-description';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId",cardId);
    queryParams = queryParams.append("description",description);
    return this.http.get<StatsByDescription[]>(outlayUrl, {params:queryParams});
  }

  getTransactionsGrouped() {
    let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/grouped';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId",cardId);
    return this.http.get<StatsByDescription[]>(outlayUrl, {params: queryParams});
  }

  getWeeklyTransactions() {
    let cardId = '1a1bb91d-d8b8-4647-9cee-26b4e8e1aaca';
    let outlayUrl = 'https://localhost:7016/api/transactions/weekly';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("clientCardId",cardId);
    queryParams = queryParams.append("skipWeeks",1);
    return this.http.get<WeeklyTransactionInfo[]>(outlayUrl, {params: queryParams});
  }
}
