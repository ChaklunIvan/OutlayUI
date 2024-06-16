import { TestBed } from '@angular/core/testing';

import { BackgroundTaskService } from '../services/update-data-background-task.service';

describe('UpdateDataBackgroundTaskService', () => {
  let service: BackgroundTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
