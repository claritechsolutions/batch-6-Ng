import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalGangaComponent } from './goal-ganga.component';

describe('GoalGangaComponent', () => {
  let component: GoalGangaComponent;
  let fixture: ComponentFixture<GoalGangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalGangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalGangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
