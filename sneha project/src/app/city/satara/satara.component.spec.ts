import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SataraComponent } from './satara.component';

describe('SataraComponent', () => {
  let component: SataraComponent;
  let fixture: ComponentFixture<SataraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SataraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SataraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
