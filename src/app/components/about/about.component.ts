import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    person: any;
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
        this.portfolioService.getPerson().subscribe((data) => {
            // console.log(data);
            this.person = data[0];
        });
    }
}
