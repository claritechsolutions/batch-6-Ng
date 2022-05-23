import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuneComponent } from './pune.component';

describe('PuneComponent', () => {
  let component: PuneComponent;
  let fixture: ComponentFixture<PuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
