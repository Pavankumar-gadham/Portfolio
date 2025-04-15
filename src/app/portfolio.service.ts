import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = `${environment.apiUrl}/education/`;
  private apiUrl1 = `${environment.apiUrl}/skills/`;

  constructor(private http: HttpClient) { }

  getEducation(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  getSkill(): Observable<any> {
    return this.http.get<any>(this.apiUrl1)
  }
}
