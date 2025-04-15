import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../certifications.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit{

  Certificate: any[] = [];

  constructor (private certificate: CertificationsService) {}

  ngOnInit(): void {
      this.certificate.getCertificate().subscribe(data => this.Certificate = data)
  }

}
