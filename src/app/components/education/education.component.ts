import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';
import { Education } from 'src/app/models/education';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
    educations: Education[] = [];
    certifications: Certification[] = [];

    constructor(private portfolioService: portfolioService) {}

    ngOnInit(): void {
        this.getEducationData();
        this.getCertificationData();
    }

    private getEducationData() {
        this.portfolioService.getEducation().subscribe((data) => {
            // console.log(data);
            this.educations = data;
        });
    }

    private getCertificationData() {
        this.portfolioService.getCertification().subscribe((data) => {
            // console.log(data);
            this.certifications = data;
        });
    }
}
