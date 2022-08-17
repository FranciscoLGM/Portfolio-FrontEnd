import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    person: any;

    constructor(private getPerson: portfolioService) {}

    ngOnInit(): void {
        this.getPersonData();
    }

    private getPersonData() {
        this.getPerson.getPerson().subscribe((data) => {
            // console.log(data);
            this.person = data[0];
        });
    }
}
