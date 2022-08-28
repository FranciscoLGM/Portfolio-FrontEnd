import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
    providedIn: 'root',
})
export class PortfolioInterceptorService implements HttpInterceptor {
    constructor(private tokenService: TokenService) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let interceptReq = req;
        const token = this.tokenService.getToken();

        if (token != null) {
            interceptReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token),
            });
        }
        return next.handle(interceptReq);
    }
}

export const interceptorProvider = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: PortfolioInterceptorService,
        multi: true,
    },
];
