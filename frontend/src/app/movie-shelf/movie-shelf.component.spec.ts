import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShelfComponent } from './movie-shelf.component';

describe('MovieShelfComponent', () => {
  let component: MovieShelfComponent;
  let fixture: ComponentFixture<MovieShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieShelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
