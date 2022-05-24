import { TestBed } from '@angular/core/testing';

import { ShareserviceService } from './shareservice.service';

describe('ShareserviceService', () => {
  let service: ShareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
