import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PareldComponent } from './pareld.component';

describe('PareldComponent', () => {
  let component: PareldComponent;
  let fixture: ComponentFixture<PareldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PareldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PareldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
