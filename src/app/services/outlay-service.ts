import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Transactions} from "../interfaces/transactions";

@Injectable({
  providedIn: 'root'
})
export class OutlayService{
  private outlayUrl = 'https://localhost:7207/api/Outlay/card-history-grouped';

  constructor(private http: HttpClient) {
  }

  getTransactionsGrouped(token: string){
    return this.http.get<Transactions[]>(this.outlayUrl)
  }

}
