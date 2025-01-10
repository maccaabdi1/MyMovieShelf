import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movie-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieShelfComponent } from './movie-shelf/movie-shelf.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    AddMovieComponent,
    MovieShelfComponent,
    MatToolbarModule,
  ],
  providers: [
    MovieService,
 
  ]
})
export class AppComponent implements OnInit {
  movies: any[] = [];
  errorMessages: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.movieService.getAllMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        this.errorMessages = 'Error fetching movies';
        console.error(error);
      }
    );
  }

  getMovie(id: number): void {
    this.movieService.getMovie(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        this.errorMessages = 'Error fetching movie';
        console.error(error);
      }
    );
  }

  createMovie(movie: any): void {
    this.movieService.createMovie(movie).subscribe(
      (data) => {
        console.log('Movie created:', data);
        this.getAllMovies(); // Refresh the list
      },
      (error) => {
        this.errorMessages = 'Error creating movie';
        console.error(error);
      }
    );
  }

  updateMovie(id: number, movie: any): void {
    this.movieService.updateMovie(id, movie).subscribe(
      (data) => {
        console.log('Movie updated:', data);
        this.getAllMovies(); // Refresh the list
      },
      (error) => {
        this.errorMessages = 'Error updating movie';
        console.error(error);
      }
    );
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe(
      (data) => {
        console.log('Movie deleted:', data);
        this.getAllMovies(); // Refresh the list
      },
      (error) => {
        this.errorMessages = 'Error deleting movie';
        console.error(error);
      }
    );
  }
}
