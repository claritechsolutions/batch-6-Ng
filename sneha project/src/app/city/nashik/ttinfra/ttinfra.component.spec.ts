import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTinfraComponent } from './ttinfra.component';

describe('TTinfraComponent', () => {
  let component: TTinfraComponent;
  let fixture: ComponentFixture<TTinfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTinfraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TTinfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
