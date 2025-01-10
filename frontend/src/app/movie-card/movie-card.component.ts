import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Movie } from '../service/movie-service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule,FormsModule,MatSelectModule]
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() movieEdited = new EventEmitter<Movie>();
  @Output() movieDeleted = new EventEmitter<Movie>();

  editMovie() {
    this.movieEdited.emit(this.movie);
  }
  deleteMovie() {
    this.movieDeleted.emit(this.movie);
  }

}
