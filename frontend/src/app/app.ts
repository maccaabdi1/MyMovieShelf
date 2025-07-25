import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { HttpClientModule } from '@angular/common/http'; // <-- Add this

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesComponent,RouterModule], // <-- Add here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}