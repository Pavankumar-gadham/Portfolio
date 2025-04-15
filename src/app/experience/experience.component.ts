import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  Experience: any [] = [];

  constructor(private exp: ExperienceService) {

  }

  ngOnInit(): void {
    this.exp.getExp().subscribe({
      next: (data) => {
        console.log("✅ Data fetched from API:", data);
        this.Experience = data;
      },
      error: (err) => {
        //console.error("❌ API Error:", err);
      }
    });
  }
}
