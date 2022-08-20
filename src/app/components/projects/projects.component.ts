import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    title = 'Mis Proyectos';
    projects: Project[] = [];

    constructor(private portfolioService: portfolioService) {}

    ngOnInit(): void {
        this.getProjectData();
    }

    private getProjectData() {
        this.portfolioService.getProject().subscribe((data) => {
            // console.log(data);
            this.projects = data;
        });
    }
}
