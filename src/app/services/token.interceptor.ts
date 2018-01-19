import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthenticationService, TOKEN_NAME } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = localStorage.getItem(TOKEN_NAME);
    const token = currentUser;
    const duplicate = req.clone({ params: req.params.set('token', token) });
    const changedReq = req.clone({
      params: req.params.set('token', token),
      headers: req.headers.set('Content-Type', 'application/json')
    });
    return next.handle(changedReq);
  }

  // constructor () {
  //   super();

  //   const token = localStorage.getItem(TOKEN_NAME);
  //   if (token) {
  //     this.headers.append(AUTH_HEADER_KEY, token);
  //   }
  // }
}
