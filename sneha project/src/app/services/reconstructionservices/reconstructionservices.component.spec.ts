import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstructionservicesComponent } from './reconstructionservices.component';

describe('ReconstructionservicesComponent', () => {
  let component: ReconstructionservicesComponent;
  let fixture: ComponentFixture<ReconstructionservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconstructionservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructionservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
