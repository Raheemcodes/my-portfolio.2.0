import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/shared.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.projects = this.sharedService.projects;
  }
}
