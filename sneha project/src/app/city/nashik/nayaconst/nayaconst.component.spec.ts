import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayaconstComponent } from './nayaconst.component';

describe('NayaconstComponent', () => {
  let component: NayaconstComponent;
  let fixture: ComponentFixture<NayaconstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayaconstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NayaconstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
