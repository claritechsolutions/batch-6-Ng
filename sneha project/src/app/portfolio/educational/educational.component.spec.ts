import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalComponent } from './educational.component';

describe('EducationalComponent', () => {
  let component: EducationalComponent;
  let fixture: ComponentFixture<EducationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
