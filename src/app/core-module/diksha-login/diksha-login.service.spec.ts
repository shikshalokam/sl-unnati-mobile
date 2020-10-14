import { TestBed } from '@angular/core/testing';

import { DikshaLoginService } from './diksha-login.service';

describe('DikshaLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DikshaLoginService = TestBed.get(DikshaLoginService);
    expect(service).toBeTruthy();
  });
});
