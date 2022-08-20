import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    person: any;

    constructor(private portfolioService: portfolioService) {}

    ngOnInit(): void {
        this.getPersonData();
    }

    private getPersonData() {
        this.portfolioService.getPerson().subscribe((data) => {
            // console.log(data);
            this.person = data[0];
        });
    }
}
