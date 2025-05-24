import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllMoviesComponent } from './allmovies/allmovies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, AllMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-movie-shelf';
}
