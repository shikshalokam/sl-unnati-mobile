import { TestBed } from '@angular/core/testing';

import { UnnatiDataService } from './unnati-data.service';

describe('UnnatiDataService', () => {
  let service: UnnatiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnnatiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
