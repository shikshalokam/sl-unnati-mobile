import { TestBed } from '@angular/core/testing';

import { WebRunnerService } from './web-runner.service';

describe('WebRunnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebRunnerService = TestBed.get(WebRunnerService);
    expect(service).toBeTruthy();
  });
});
