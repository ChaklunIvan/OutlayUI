import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Transactions} from "../interfaces/transactions";
import {StatsByDescription} from "../interfaces/stats-by-description";
import {ClientInfo} from "../interfaces/clientInfo";

@Injectable({
  providedIn: 'root'
})
export class OutlayService {

  constructor(private http: HttpClient) {
  }

  getClientInfo() {
    let outlayUrl = 'https://localhost:7207/api/Outlay/client-info';
    return this.http.get<ClientInfo>(outlayUrl);
  }

  getStatsByDescription(description: string) {
    let cardId = 'XzNHt-dLmlqphOajbo0saA';
    let outlayUrl = 'https://localhost:7207/api/Outlay/card-history-by-description';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("cardId",cardId);
    queryParams = queryParams.append("description",description);
    return this.http.get<StatsByDescription[]>(outlayUrl, {params:queryParams});
  }

  getTransactionsGrouped() {
    let cardId = 'XzNHt-dLmlqphOajbo0saA';
    let outlayUrl = 'https://localhost:7207/api/Outlay/card-history-by-description';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("cardId",cardId);
    return this.http.get<StatsByDescription[]>(outlayUrl, {params:queryParams});
  }
}
