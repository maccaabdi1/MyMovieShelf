import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { WatchlistComponent } from './watchlist/watchlist'; 

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'watchlist', component: WatchlistComponent },
];