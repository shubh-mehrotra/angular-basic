import { TestBed } from '@angular/core/testing';

import { CustomerDashboardService } from './customer-dashboard.service';

describe('CustomerDashboardService', () => {
  let service: CustomerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
