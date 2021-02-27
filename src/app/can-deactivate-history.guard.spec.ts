import { TestBed } from '@angular/core/testing';

import { CanDeactivateHistoryGuard } from './can-deactivate-history.guard';

describe('CanDeactivateHistoryGuard', () => {
  let guard: CanDeactivateHistoryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateHistoryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
