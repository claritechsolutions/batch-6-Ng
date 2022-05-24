import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitechturaldesignComponent } from './architechturaldesign.component';

describe('ArchitechturaldesignComponent', () => {
  let component: ArchitechturaldesignComponent;
  let fixture: ComponentFixture<ArchitechturaldesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitechturaldesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitechturaldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
