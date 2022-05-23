import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiComponent } from './mumbai.component';

describe('MumbaiComponent', () => {
  let component: MumbaiComponent;
  let fixture: ComponentFixture<MumbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MumbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
