import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3cComponent } from './m3c.component';

describe('M3cComponent', () => {
  let component: M3cComponent;
  let fixture: ComponentFixture<M3cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
