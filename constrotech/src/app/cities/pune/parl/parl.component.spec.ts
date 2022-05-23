import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlComponent } from './parl.component';

describe('ParlComponent', () => {
  let component: ParlComponent;
  let fixture: ComponentFixture<ParlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
