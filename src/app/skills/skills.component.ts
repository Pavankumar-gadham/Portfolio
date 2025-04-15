import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  Skills: any[] = [];

  constructor(private portservice: PortfolioService) {}

  ngOnInit(): void {
    this.portservice.getSkill().subscribe({
      next: (data) => {
        console.log("✅ Data fetched from API:", data);
        this.Skills = data.map((skill: any) => ({
          ...skill,
          //icon: skill.icon || 'http://localhost:8000/media/default.png'
        }));
      },
      error: (err) => {
        console.error("❌ API Error:", err);
      }
    });
  }

 /* onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
  
    if (!target.dataset['errorHandled']) {
      target.src = 'assets/images/default.png';
      target.dataset['errorHandled'] = 'true'; // mark as handled
    }
  } */
  
  
  
}
