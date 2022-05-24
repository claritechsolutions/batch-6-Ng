import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NashikComponent } from './nashik.component';

describe('NashikComponent', () => {
  let component: NashikComponent;
  let fixture: ComponentFixture<NashikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NashikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NashikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
