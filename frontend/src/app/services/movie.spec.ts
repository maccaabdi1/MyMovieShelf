import { TestBed } from '@angular/core/testing';

import { Movie, MovieService } from './movie';

describe('Movie', () => {
  let service: Movie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
