import { TestBed } from '@angular/core/testing';

import { SunbirdService } from './sunbird.service';

describe('SunbirdService', () => {
  let service: SunbirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunbirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
