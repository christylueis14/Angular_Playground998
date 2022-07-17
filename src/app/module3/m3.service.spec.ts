import { TestBed } from '@angular/core/testing';

import { M3Service } from './m3.service';

describe('M3Service', () => {
  let service: M3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
