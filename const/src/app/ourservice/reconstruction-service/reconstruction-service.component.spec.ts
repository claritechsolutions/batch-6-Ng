import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstructionServiceComponent } from './reconstruction-service.component';

describe('ReconstructionServiceComponent', () => {
  let component: ReconstructionServiceComponent;
  let fixture: ComponentFixture<ReconstructionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconstructionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
