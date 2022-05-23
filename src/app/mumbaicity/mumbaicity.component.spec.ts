import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaicityComponent } from './mumbaicity.component';

describe('MumbaicityComponent', () => {
  let component: MumbaicityComponent;
  let fixture: ComponentFixture<MumbaicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MumbaicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
