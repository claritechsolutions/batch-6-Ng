import { TestBed } from '@angular/core/testing';

import { AllServicesService } from './all-services.service';

describe('AllServicesService', () => {
  let service: AllServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
