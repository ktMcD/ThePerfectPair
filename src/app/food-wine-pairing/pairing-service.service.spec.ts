import { TestBed } from '@angular/core/testing';

import { PairingServiceService } from './pairing-service.service';

describe('PairingServiceService', () => {
  let service: PairingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PairingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
