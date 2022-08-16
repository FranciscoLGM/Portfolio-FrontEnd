import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    person: any;

    constructor(private getPerson: portfolioService) {}

    ngOnInit(): void {
        this.getPerson.getPerson().subscribe((data) => {
            console.log(data);
            this.person = data[0];
        });
    }
}
