import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signin } from 'src/app/models/signin';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    title = 'Inicia Sesión';
    signinForm: FormGroup;
    isLogged = false;
    isLoginFail = false;
    roles: string[] = [];

    constructor(
        private tokenService: TokenService,
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder
    ) {
        this.signinForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
            this.roles = this.tokenService.getAuthotities();
        }
    }

    postSigninData(): void {
        const signin: Signin = {
            userName: this.signinForm.get('userName')?.value,
            password: this.signinForm.get('password')?.value,
        };
        this.authService.postSignin(signin).subscribe({
            next: (data) => {
                this.isLogged = true;
                this.isLoginFail = false;
                this.tokenService.setToken(data.token);
                this.tokenService.setUserName(data.userName);
                this.tokenService.setAuthorities(data.authorities);
                this.roles = data.authorities;
                this.toastr.success(
                    'Bienvenido a la sesión de Administrador',
                    'Éxito'
                );
                this.router.navigate(['/']);
            },
            error: (err) => {
                this.isLogged = false;
                this.isLoginFail = true;
                this.toastr.error(
                    'Hubo un error en el inicio de sesión!',
                    'Error'
                );
                this.signinForm.reset();
                console.error(err);
            },
        });
    }
}
