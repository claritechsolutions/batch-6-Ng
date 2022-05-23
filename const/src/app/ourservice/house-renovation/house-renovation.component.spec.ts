import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRenovationComponent } from './house-renovation.component';

describe('HouseRenovationComponent', () => {
  let component: HouseRenovationComponent;
  let fixture: ComponentFixture<HouseRenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseRenovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
