import { TestBed } from '@angular/core/testing';

import { OutlayService } from './outlay-service';

describe('OutlayServiceService', () => {
  let service: OutlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
