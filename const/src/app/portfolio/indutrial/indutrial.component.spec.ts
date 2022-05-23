import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndutrialComponent } from './indutrial.component';

describe('IndutrialComponent', () => {
  let component: IndutrialComponent;
  let fixture: ComponentFixture<IndutrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndutrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndutrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
