import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCalendar } from './movie-calendar';

describe('MovieCalendar', () => {
  let component: MovieCalendar;
  let fixture: ComponentFixture<MovieCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
