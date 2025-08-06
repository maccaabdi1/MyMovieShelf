import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { WatchlistComponent } from './watchlist/watchlist'; 
import { MovieCalendar } from './movie-calendar/movie-calendar';

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'watchlist', component: WatchlistComponent },
  {path: 'movie-calendar', component: MovieCalendar}
];

