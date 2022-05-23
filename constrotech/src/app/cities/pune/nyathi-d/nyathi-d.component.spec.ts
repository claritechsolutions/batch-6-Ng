import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyathiDComponent } from './nyathi-d.component';

describe('NyathiDComponent', () => {
  let component: NyathiDComponent;
  let fixture: ComponentFixture<NyathiDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyathiDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyathiDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
