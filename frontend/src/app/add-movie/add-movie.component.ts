import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../service/movie-service';
import { provideHttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    MovieService,
   
  ]
})
export class AddMovieComponent {
  movie = {
    title: '',
    genre: '',
    image: '',
    rating: null,
    description: '',
    releaseDate: ''
  };

  constructor(private movieService: MovieService) {}

  addMovie() {
    this.movieService.createMovie(this.movie).subscribe(
      (response) => {
        console.log('Movie added successfully', response);
        // Optionally, reset the form or navigate away
      },
      (error) => {
        console.error('Error adding movie', error);
      }
    );
  }
}
