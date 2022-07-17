import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3c2Component } from './m3c2.component';

describe('M3c2Component', () => {
  let component: M3c2Component;
  let fixture: ComponentFixture<M3c2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3c2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
