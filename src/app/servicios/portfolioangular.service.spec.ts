import { TestBed } from '@angular/core/testing';

import { PortfolioangularService } from './portfolioangular.service';

describe('PortfolioangularService', () => {
  let service: PortfolioangularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioangularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
