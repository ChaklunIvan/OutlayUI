import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Transactions} from "../interfaces/transactions";
import {StatsByDescription} from "../interfaces/stats-by-description";

@Injectable({
  providedIn: 'root'
})
export class OutlayService {

  constructor(private http: HttpClient) {
  }

  getTransactionsGrouped(token: string) {
    let outlayUrl = 'https://localhost:7207/api/Outlay/card-history-grouped';
    return this.http.get<Transactions[]>(outlayUrl);
  }

  getStatsByDescription(description: string) {
    let outlayUrl = 'https://localhost:7207/api/Outlay/card-history-by-description';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("description",description);
    return this.http.get<StatsByDescription[]>(outlayUrl, {params:queryParams});
  }
}
