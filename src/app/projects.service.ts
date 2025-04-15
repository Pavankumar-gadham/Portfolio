import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'http://127.0.0.1:8000/myport/projects/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
