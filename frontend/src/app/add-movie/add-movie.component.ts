import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../service/movie-service';
import { provideHttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, formatDate } from '@angular/common';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],

  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    // BrowserAnimationsModule,
  ],
  
  providers: [
    MovieService,
    MatNativeDateModule,
   
  ]
})
export class AddMovieComponent {
  movie = {
    title: '',
    genre: '',
    rating: null,
    description: '',
    releaseDate: ''
  };

  @Output() movieAdded = new EventEmitter<any>();

  constructor(private movieService: MovieService,private dialogRef: MatDialogRef<AddMovieComponent>) {}

  addMovie() {
    console.log('Movie to be added:', this.movie);
    if(this.movie.title && this.movie.genre && this.movie.rating && this.movie.description && this.movie.releaseDate) {
      const formattedDate = formatDate(
        this.movie.releaseDate,
        'yyyy-MM-dd',
        'en-US'
      );
      this.movie.releaseDate = formattedDate;
    this.movieService.createMovie(this.movie).subscribe(
      (response) => {
        console.log('Movie added successfully', response);
        this.movieAdded.emit(response);
        
        this.movie = {
          title: '',
          genre: '',
          rating: null,
          description: '',  
          releaseDate: ''
        }
        this.dialogRef.close(this.movie);
      },
      (error) => {
        console.error('Error adding movie', error);
      }
    );
  
  }

}
close() {
  this.dialogRef.close(); // Close the dialog without saving
}
}
