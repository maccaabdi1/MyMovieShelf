import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie, MovieService } from '../service/movie-service';
import { AddMovieComponent } from "../add-movie/add-movie.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-shelf',
  templateUrl: './movie-shelf.component.html',
  styleUrls: ['./movie-shelf.component.css'],
  standalone: true,
  imports: [CommonModule, MovieCardComponent, AddMovieComponent]
})
export class MovieShelfComponent {
 
  movies: any[] = [];

   constructor(private movieService: MovieService, private dialog: MatDialog) {}

   ngOnInit() {
    this.fetchMovies();
   }

   fetchMovies() {
    this.movieService.getAllMovies().subscribe(
      (data: Movie[]) => {
        console.log('Fetched movies:', data); // Log fetched data
        this.movies = Object.values(data); // Convert to array if needed
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }
  
   openAddMovieDialog() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '400px', // Adjust width as needed
    });

  // onMovieAdded(movie: Movie) {
  //   this.movies.unshift(movie);
  // }
  dialogRef.afterClosed().subscribe((movie: Movie) => {
    if (movie) {
      console.log('Dialog closed with movie:', movie); 
      this.movieService.createMovie(movie).subscribe(
        (response) => {
          console.log('Movie added successfully', response);
          this.movies.unshift(response); 
        },(error) => {
            
            console.error('Error adding movie', error);
          }
        );
      }
    });

}
onMovieEdited(movie: Movie) {
  this.movieService.updateMovie(movie.id!,movie).subscribe(
    (response) => {
      console.log('Movie updated successfully', response);
    },
    (error) => {
      console.error('Error updating movie', error);
    }
  );
}
onMovieDeleted(movie: Movie) {
  
  // this.movies = this.movies.filter(m => m.id !== movie.id);
  this.movieService.deleteMovie(movie.id!).subscribe(
    (response) => {
      console.log('Movie deleted successfully', response);
    },
    (error) => {
      console.error('Error deleting movie', error);
    }
  );
}
}
