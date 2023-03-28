import { TestBed } from '@angular/core/testing';

import { RandomPairingServiceService } from './random-pairing-service.service';

describe('RandomPairingServiceService', () => {
  let service: RandomPairingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPairingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
