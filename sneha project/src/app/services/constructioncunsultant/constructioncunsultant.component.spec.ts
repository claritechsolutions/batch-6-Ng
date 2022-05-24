import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructioncunsultantComponent } from './constructioncunsultant.component';

describe('ConstructioncunsultantComponent', () => {
  let component: ConstructioncunsultantComponent;
  let fixture: ComponentFixture<ConstructioncunsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructioncunsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructioncunsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
