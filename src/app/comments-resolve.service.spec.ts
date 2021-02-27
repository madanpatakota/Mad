import { TestBed } from '@angular/core/testing';

import { CommentsResolveService } from './comments-resolve.service';

describe('CommentsResolveService', () => {
  let service: CommentsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
