import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4c2Component } from './m4c2.component';

describe('M4c2Component', () => {
  let component: M4c2Component;
  let fixture: ComponentFixture<M4c2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4c2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
