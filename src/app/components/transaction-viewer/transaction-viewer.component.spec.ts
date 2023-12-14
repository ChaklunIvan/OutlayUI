import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionViewerComponent } from './transaction-viewer.component';

describe('TransactionViewerComponent', () => {
  let component: TransactionViewerComponent;
  let fixture: ComponentFixture<TransactionViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionViewerComponent]
    });
    fixture = TestBed.createComponent(TransactionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
