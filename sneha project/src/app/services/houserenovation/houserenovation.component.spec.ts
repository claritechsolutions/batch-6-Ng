import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouserenovationComponent } from './houserenovation.component';

describe('HouserenovationComponent', () => {
  let component: HouserenovationComponent;
  let fixture: ComponentFixture<HouserenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouserenovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouserenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
