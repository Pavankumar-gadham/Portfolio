import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = 'http://127.0.0.1:8000/myport/experience/';

  constructor(private http: HttpClient) { }

  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }
}
