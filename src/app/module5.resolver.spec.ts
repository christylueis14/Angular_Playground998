import { TestBed } from '@angular/core/testing';

import { Module5Resolver } from './module5.resolver';

describe('Module5Resolver', () => {
  let resolver: Module5Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(Module5Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
