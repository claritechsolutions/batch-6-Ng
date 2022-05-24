import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidComponent } from './tid.component';

describe('TidComponent', () => {
  let component: TidComponent;
  let fixture: ComponentFixture<TidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
