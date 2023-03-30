import { TestBed } from '@angular/core/testing';

import { WinePairingServiceService } from './wine-pairing-service.service';

describe('WinePairingServiceService', () => {
  let service: WinePairingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinePairingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
