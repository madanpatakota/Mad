import { TestBed } from '@angular/core/testing';

import { CanDeActivateGuard } from './can-de-activate.guard';

describe('CanDeActivateGuard', () => {
  let guard: CanDeActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
