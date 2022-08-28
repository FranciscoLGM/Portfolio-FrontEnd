import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    id!: string;
    imageProfile!: string;
    name!: string;
    aboutDescription!: string;
    isLogged = false;

    constructor(
        private portfolioService: portfolioService,
        private tokenService: TokenService
    ) {}

    ngOnInit(): void {
        this.getPersonData();

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    private getPersonData() {
        this.portfolioService.getPerson().subscribe({
            next: (data) => {
                this.imageProfile = data[0].imageProfile;
                this.name = data[0].name;
                this.aboutDescription = data[0].aboutDescription;
                this.id = data[0].id;
            },
        });
    }
}
