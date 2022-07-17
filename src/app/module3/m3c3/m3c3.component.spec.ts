import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3c3Component } from './m3c3.component';

describe('M3c3Component', () => {
  let component: M3c3Component;
  let fixture: ComponentFixture<M3c3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3c3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3c3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
