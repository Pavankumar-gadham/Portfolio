import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

  private apiUrl = `${environment.apiUrl}/experience/`;

  constructor(private http: HttpClient) { }

  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }
}
