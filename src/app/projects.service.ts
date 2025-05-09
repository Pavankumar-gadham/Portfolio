import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = `${environment.apiUrl}/projects/`;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
