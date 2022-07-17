import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4c3Component } from './m4c3.component';

describe('M4c3Component', () => {
  let component: M4c3Component;
  let fixture: ComponentFixture<M4c3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4c3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4c3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
