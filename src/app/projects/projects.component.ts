import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  Projects: any [] = [];

  constructor(private project: ProjectsService) {}

  ngOnInit(): void {
      this.project.getProjects().subscribe(data => this.Projects = data)
  }
}
