import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgconstComponent } from './ggconst.component';

describe('GgconstComponent', () => {
  let component: GgconstComponent;
  let fixture: ComponentFixture<GgconstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgconstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgconstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
