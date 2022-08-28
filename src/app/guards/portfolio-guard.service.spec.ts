import { TestBed } from '@angular/core/testing';

import { PortfolioGuardService } from './portfolio-guard.service';

describe('PortfolioGuardService', () => {
  let service: PortfolioGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
