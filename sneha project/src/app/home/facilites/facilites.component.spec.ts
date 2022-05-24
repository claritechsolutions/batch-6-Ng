import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitesComponent } from './facilites.component';

describe('FacilitesComponent', () => {
  let component: FacilitesComponent;
  let fixture: ComponentFixture<FacilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
