import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface CalendarEvent
{
  id? : number;
  movieTitle: string;
  watchDate: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private baseUrl = 'http://localhost:8080/calendar';

  constructor(private http: HttpClient){}

  getEvents(): Observable<CalendarEvent[]>
  {
    return this.http.get<CalendarEvent[]>(this.baseUrl);

  }

  addEvent(event: CalendarEvent): Observable<CalendarEvent>
  {
    return this.http.post<CalendarEvent>(this.baseUrl,event);
  }
  updateEvent(event: CalendarEvent): Observable<CalendarEvent>
  {
    return this.http.put<CalendarEvent>(`${this.baseUrl}/${event.id}`,event);
  }
 
 
deleteEvent(id: number): Observable<string> {
  return this.http.delete<string>(`${this.baseUrl}/${id}`, {
    responseType: 'text' as 'json'  // 👈 tells Angular "don't parse as JSON"
  });
}
  

  
}
