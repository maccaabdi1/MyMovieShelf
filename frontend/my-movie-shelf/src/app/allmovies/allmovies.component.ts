import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Movie {
  title: string;
  status: string;
  rating: number;
  releaseDate: string;
  watchedDate: string;
  notes: string

}

@Component({
  selector: 'app-allmovies',
  imports: [CommonModule, FormsModule],
  templateUrl: './allmovies.component.html',
  styleUrl: './allmovies.component.css'
})
export class AllMoviesComponent {

  movies: Movie[] = [];

  addMovie(){
    this.movies.push({
      title: '',
      status: '',
      rating: 0,
      releaseDate: '',
      watchedDate: '',
      notes: ''
    });
}

}

