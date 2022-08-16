import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
    educations: any;

    constructor(private getData: portfolioService) {}

    ngOnInit(): void {
        this.getData.getData().subscribe((data) => {
            console.log(data.education);
            this.educations = data.education;
        });
    }
}
