import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunecityComponent } from './punecity.component';

describe('PunecityComponent', () => {
  let component: PunecityComponent;
  let fixture: ComponentFixture<PunecityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunecityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
