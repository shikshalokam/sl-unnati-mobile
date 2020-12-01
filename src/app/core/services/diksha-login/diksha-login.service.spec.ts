import { TestBed } from '@angular/core/testing';

import { DikshaLoginService } from './diksha-login.service';

describe('DikshaLoginService', () => {
  let service: DikshaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DikshaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
