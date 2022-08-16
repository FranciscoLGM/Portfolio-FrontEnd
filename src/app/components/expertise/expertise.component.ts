import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
    expertises: any;

    constructor(private getData: portfolioService) {}

    ngOnInit(): void {
        this.getData.getData().subscribe((data) => {
            console.log(data.expertise);
            this.expertises = data.expertise;
        });
    }
}
