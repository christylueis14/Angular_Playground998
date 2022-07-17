import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4c1Component } from './m4c1.component';

describe('M4c1Component', () => {
  let component: M4c1Component;
  let fixture: ComponentFixture<M4c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4c1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
