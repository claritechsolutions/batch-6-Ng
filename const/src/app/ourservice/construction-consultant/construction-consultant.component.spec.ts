import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionConsultantComponent } from './construction-consultant.component';

describe('ConstructionConsultantComponent', () => {
  let component: ConstructionConsultantComponent;
  let fixture: ComponentFixture<ConstructionConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
