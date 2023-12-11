import { Component } from '@angular/core';
import { ProjectsService } from "../projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // constructor(private projectsService: ProjectsService) {}

  // public projects = this.projectsService.getProjects();

  /**
   * sends to detail view of the project
   */
  openProjects(){

  }
}
