import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-shelf',
  templateUrl: './movie-shelf.component.html',
  styleUrls: ['./movie-shelf.component.css'],
  standalone: true,
  imports: [CommonModule, MovieCardComponent]
})
export class MovieShelfComponent {
  movies = [
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 5,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      releaseDate: '1994-09-23'
    },
    {
      title: 'The Godfather',
      genre: 'Crime, Drama',
      rating: 5,
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      releaseDate: '1972-03-24'
    },
    {
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      rating: 5,
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      releaseDate: '2008-07-18'
    },
    {
      title: 'Pulp Fiction',
      genre: 'Crime, Drama',
      rating: 4,
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      releaseDate: '1994-10-14'
    },
    {
      title: 'Forrest Gump',
      genre: 'Drama, Romance',
      rating: 5,
      description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
      releaseDate: '1994-07-06'
    }
  ];
}
