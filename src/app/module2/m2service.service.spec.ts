import { TestBed } from '@angular/core/testing';

import { M2serviceService } from './m2service.service';

describe('M2serviceService', () => {
  let service: M2serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M2serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
