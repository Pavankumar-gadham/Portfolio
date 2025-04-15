import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://127.0.0.1:8000/myport/contact/', this.formData)
    .subscribe({
    next: res => {
      this.submitted = true;
      this.formData = { name: '', email: '', message: '' };
    },
    error: err => console.error(err),
    complete: () => console.log('Request completed.')
  });

  }

}
