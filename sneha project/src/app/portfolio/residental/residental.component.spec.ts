import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentalComponent } from './residental.component';

describe('ResidentalComponent', () => {
  let component: ResidentalComponent;
  let fixture: ComponentFixture<ResidentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
