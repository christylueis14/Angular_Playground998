import { TestBed } from '@angular/core/testing';

import { BasicLoaderService } from './basic-loader.service';

describe('BasicLoaderService', () => {
  let service: BasicLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
