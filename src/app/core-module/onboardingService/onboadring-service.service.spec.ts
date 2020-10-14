import { TestBed } from '@angular/core/testing';

import { OnboadringServiceService } from './onboadring-service.service';

describe('OnboadringServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnboadringServiceService = TestBed.get(OnboadringServiceService);
    expect(service).toBeTruthy();
  });
});
