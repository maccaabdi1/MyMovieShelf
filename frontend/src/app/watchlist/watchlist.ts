import { Component, NgModule, OnInit } from '@angular/core';
import { MovieService, Movie } from '../services/movie';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.html',
  styleUrls: ['./watchlist.css'],
  imports: [CommonModule]
})

export class WatchlistComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res.data.movies.map((movie: any) => ({
        ...movie,
        genre: movie.genre.split(',').map((g: string) => g.trim())
      }));
    });
  }

  getByStatus(status: string): Movie[] {
    return this.movies.filter(movie => movie.status === status);
  }
}
