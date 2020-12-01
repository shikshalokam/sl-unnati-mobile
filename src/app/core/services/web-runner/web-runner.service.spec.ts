import { TestBed } from '@angular/core/testing';

import { WebRunnerService } from './web-runner.service';

describe('WebRunnerService', () => {
  let service: WebRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
