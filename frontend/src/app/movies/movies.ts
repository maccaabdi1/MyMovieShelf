import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../services/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  imports: [CommonModule, FormsModule,NgSelectModule],
  styleUrls: ['./movies.css']
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genres: string[] = [
  'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi',
  'Romance', 'Thriller', 'Documentary', 'Animation'
];
  newMovie: Movie = {
    title: '',
    genre: [],
    rating: 1,
    status: 'COMPLETED',
    notes: ''
  };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

loadMovies() {
  this.movieService.getMovies().subscribe(res => {
    this.movies = res.data.movies.map((movie: any) => ({
      ...movie,
      genre: movie.genre.split(',').map((g: string) => g.trim())
    }));
  });
}



addMovie() {
  const movieToSend = {
    ...this.newMovie,
    genre: this.newMovie.genre.join(', ') // ✅ convert array to string
  };

  this.movieService.addMovie(movieToSend).subscribe(() => {
    this.loadMovies();
    this.newMovie = {
      title: '',
      genre: [],
      rating: 1,
      status: 'COMPLETED',
      notes: ''
    };
  });
}


  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.loadMovies();
    });
  }
  selectedMovie: Movie | null = null;

editMovie(movie: Movie) {
  this.selectedMovie = { ...movie, genre: movie.genre ? movie.genre : [] };
}

updateMovie() {
  if (!this.selectedMovie) return;

  const updatedMovie = {
    ...this.selectedMovie,
    genre: this.selectedMovie.genre.join(', ')
  };

  this.movieService.updateMovie(updatedMovie).subscribe(() => {
    this.loadMovies();
    this.selectedMovie = null;
  });
}
}
