import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Transactions} from "../interfaces/transactions";
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutlayService{
  getToken$: Observable<any>;
  private getTokenSubject = new Subject<any>();
  private outlayUrl = 'https://localhost:7207/api/Outlay/card-history-grouped';

  constructor(private http: HttpClient) {
    this.getToken$ = this.getTokenSubject.asObservable();
  }

  getTransactionsGrouped(token: string): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.outlayUrl)
  }
  getToken(value: any){
    debugger
    this.getTokenSubject.next(value);
  }
}
