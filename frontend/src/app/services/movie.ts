import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum MovieStatus {
  WANT_TO_WATCH = 'WANT_TO_WATCH',
  WATCHING = 'WATCHING',
  COMPLETED = 'COMPLETED',
  DROPPED = 'DROPPED'
}

export interface Movie {
  id?: number;
  title: string;
  watchDate?: string;
  genre: string[];
  releaseDate?: string;
  rating: number;
  notes?: string;
  status: MovieStatus;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, movie);
  }

  updateMovie(movie: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
