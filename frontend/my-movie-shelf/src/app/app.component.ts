import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, AllmoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-movie-shelf';
}
