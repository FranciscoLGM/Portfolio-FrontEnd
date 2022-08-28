import { TestBed } from '@angular/core/testing';

import { PortfolioInterceptorService } from './portfolio-interceptor.service';

describe('PortfolioInterceptorService', () => {
  let service: PortfolioInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
