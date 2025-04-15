import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  Education: any[] = [];

  constructor(private portservice:PortfolioService,
  ) {}

  ngOnInit(): void {
      this.portservice.getEducation().subscribe({
        next: (data) => {
          console.log("✅ Data fetched from API:", data);
          this.Education = data;
        },
        error: (err) => {
          //console.error("❌ API Error:", err);
        }
      });

    
  }

  

}
