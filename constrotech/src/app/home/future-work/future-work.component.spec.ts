import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureWorkComponent } from './future-work.component';

describe('FutureWorkComponent', () => {
  let component: FutureWorkComponent;
  let fixture: ComponentFixture<FutureWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
