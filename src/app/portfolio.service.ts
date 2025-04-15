import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'http://127.0.0.1:8000/myport/education/';
  private apiUrl1 = 'http://127.0.0.1:8000/myport/skills/';

  constructor(private http: HttpClient) { }

  getEducation(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  getSkill(): Observable<any> {
    return this.http.get<any>(this.apiUrl1)
  }
}
