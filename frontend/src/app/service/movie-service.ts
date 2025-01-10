import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {Observable} from 'rxjs';

export interface Movie{

    id?: number;
    title: string;
    genre: string;
    rating: number;
    description: string;
    releaseDate: string;
}
@Injectable({
  providedIn: 'root'
})
export class MovieService{

    private apiUrl = 'http://localhost:8080/movie';

    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.apiUrl}/list`);
    }
    getMovie(id: number): Observable<Movie> {
        return this.http.get<Movie>(`${this.apiUrl}/get/${id}`);
    }
    createMovie(movie: Object): Observable<Movie> {
        console.log('sending movie to the server', movie);
        return this.http.post<Movie>(`${this.apiUrl}/create`, movie);
    }
    updateMovie(id: number, movie: any): Observable<Movie> {
        return this.http.put<Movie>(`${this.apiUrl}/update`, movie);
    }
    deleteMovie(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
    }


}