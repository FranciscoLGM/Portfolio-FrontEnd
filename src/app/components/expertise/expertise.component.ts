import { Component, OnInit } from '@angular/core';
import { Expertise } from 'src/app/models/expertise';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
    expertises: Expertise[] = [];

    constructor(private getExpertise: portfolioService) {}

    ngOnInit(): void {
        this.getExpertiseData();
    }

    private getExpertiseData() {
        this.getExpertise.getExpertise().subscribe((data) => {
            // console.log(data);
            this.expertises = data;
        });
    }
}
