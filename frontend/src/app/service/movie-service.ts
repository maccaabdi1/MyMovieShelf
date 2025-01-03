import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService{

    private apiUrl = 'http://localhost:8080/movies';

    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<any> {
        return this.http.get(`${this.apiUrl}`);
    }
    getMovie(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    createMovie(movie: Object): Observable<Object> {
        return this.http.post(`${this.apiUrl}`, movie);
    }
    updateMovie(id: number, movie: any): Observable<Object> {
        return this.http.put(`${this.apiUrl}/movie/${id}`, movie);
    }
    deleteMovie(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
    }


}