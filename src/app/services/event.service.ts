import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY'

  constructor(private http: HttpClient) { }
  
  getEvents(page: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.url + `&page=${page}`);
  }
}