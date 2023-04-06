import { TestBed } from '@angular/core/testing';

import { LatestRandomsService } from './latest-randoms.service';

describe('LatestRandomsService', () => {
  let service: LatestRandomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestRandomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
