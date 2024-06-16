import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subscription } from 'rxjs';
import { AppState, TokenState } from '../store/state/AppState';
import { Store } from '@ngrx/store';
import { selectTokenState } from '../store/selectors/token.selector';

@Injectable({
  providedIn: 'root',
})
export class BackgroundTaskService implements OnDestroy {
  private taskSubscription: Subscription;
  public tokenID: string;
  public tokenID$: Observable<TokenState>;
  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.tokenID$ = this.store.select(selectTokenState);
    this.tokenID$.subscribe((id) => {
      this.tokenID = id.id.toString();
    });
    this.startBackgroundTask();
  }

  private startBackgroundTask(): void {
    // Запускаємо завдання раз на 5 хвилин (300000 мілісекунд)
    this.taskSubscription = interval(300000).subscribe(() => {
      this.sendRequest();
    });
  }

  private sendRequest(): void {
    this.http.get('https://localhost:7016/api/Clients/update-balance?clientToken=ulkOyfHBRWm56_a2ztKiKSQ69y7LcUZkSrEyEYnxH52g').subscribe(
      response => {
        console.log('Запит виконано успішно:', response);
      },
      error => {
        console.error('Помилка при виконанні запиту:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
