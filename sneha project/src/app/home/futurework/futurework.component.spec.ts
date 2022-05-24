import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureworkComponent } from './futurework.component';

describe('FutureworkComponent', () => {
  let component: FutureworkComponent;
  let fixture: ComponentFixture<FutureworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
