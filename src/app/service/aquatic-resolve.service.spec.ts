import { TestBed } from '@angular/core/testing';

import { AquaticResolveService } from './aquatic-resolve.service';

describe('AquaticResolveService', () => {
  let service: AquaticResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquaticResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
