import { TestBed } from '@angular/core/testing';

import { KendraApiService } from './kendra-api.service';

describe('KendraApiService', () => {
  let service: KendraApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendraApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
