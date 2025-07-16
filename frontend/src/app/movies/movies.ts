import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../services/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  imports: [CommonModule, FormsModule],
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
      this.movies = res.data.movies;
    });
  }

  addMovie() {
    this.movieService.addMovie(this.newMovie).subscribe(() => {
      this.loadMovies();
      this.newMovie = { title: '', genre: [], rating: 1, status: 'COMPLETED',notes: ' ' };
    });
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.loadMovies();
    });
  }
  selectedMovie: Movie | null = null;

editMovie(movie: Movie) {
  // Clone the movie to avoid direct binding
  this.selectedMovie = { ...movie, genre: [...movie.genre] };
}

updateMovie() {
  if (!this.selectedMovie) return;

  this.movieService.updateMovie(this.selectedMovie).subscribe(() => {
    this.loadMovies();
    this.selectedMovie = null; // Clear the form after update
  });

}
}
