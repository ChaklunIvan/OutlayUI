import { TestBed } from '@angular/core/testing';

import { OutlayServiceService } from './outlay-service';

describe('OutlayServiceService', () => {
  let service: OutlayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutlayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
