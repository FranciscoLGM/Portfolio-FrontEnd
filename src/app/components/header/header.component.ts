import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    profession!: string;
    occupation!: string;
    heroDescription!: string;

    constructor(private portfolioService: portfolioService) {}

    ngOnInit(): void {
        this.getPersonData();
    }

    private getPersonData() {
        this.portfolioService.getPerson().subscribe({
            next: (data) => {
                this.profession = data?.header[0].profession;
                this.occupation = data?.header[0].occupation;
                this.heroDescription = data?.header[0].heroDescription;
            },
        });
    }
}
