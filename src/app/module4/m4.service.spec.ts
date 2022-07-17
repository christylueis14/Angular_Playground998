import { TestBed } from '@angular/core/testing';

import { M4Service } from './m4.service';

describe('M4Service', () => {
  let service: M4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
