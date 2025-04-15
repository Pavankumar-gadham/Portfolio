import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private apiUrl = 'http://127.0.0.1:8000/myport/certifications/';

  constructor(private http: HttpClient) { }

  getCertificate(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
