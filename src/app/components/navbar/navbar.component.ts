import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    isLogged = false;

    constructor(private tokenService: TokenService) {}

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    signout(): void {
        this.tokenService.signOut();
        window.location.reload();
    }

    onMenu() {
        document.getElementById('menu')?.classList.toggle('active');
        document.getElementById('nav')?.classList.toggle('active');
        document.getElementById('menu-bg')?.classList.toggle('change');
    }
}
