import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private apiUrl = `${environment.apiUrl}/certifications/`;

  constructor(private http: HttpClient) { }

  getCertificate(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
