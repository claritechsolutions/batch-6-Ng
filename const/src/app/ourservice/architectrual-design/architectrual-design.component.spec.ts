import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectrualDesignComponent } from './architectrual-design.component';

describe('ArchitectrualDesignComponent', () => {
  let component: ArchitectrualDesignComponent;
  let fixture: ComponentFixture<ArchitectrualDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectrualDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectrualDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
