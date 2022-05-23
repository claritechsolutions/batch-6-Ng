import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LComponent } from './l.component';

describe('LComponent', () => {
  let component: LComponent;
  let fixture: ComponentFixture<LComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
