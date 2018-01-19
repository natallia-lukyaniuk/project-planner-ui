import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

import { UserResponse } from './user-response.model';

export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AuthenticationService {
    // public token: string;

    // constructor(private http: HttpClient) {
    //     // set token if saved in local storage
    //     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     this.token = currentUser && currentUser.token;
    // }

    // public getToken() {
    //     return this.token;
    // }

    // public login(name: string, password: string): Observable<boolean> {
    //     const user = {
    //         login: name,
    //         password
    //     };
    //     const headers = new Headers();
    //     headers.append('Authorization', 'my-auth-token');
    //     headers.append('Content-Type', 'application/json');
    //     const options = new RequestOptions({headers: headers});
    //     return this.http
    //       .post('http://localhost:3000/api/authenticate', JSON.stringify(user))
    //         .map((response: UserResponse) => {
    //             // login successful if there's a jwt token in the response
    //             const token = response.token;
    //             if (token) {
    //                 // set token property
    //                 this.token = token;

    //                 // store username and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage
    //                   .setItem(
    //                     'currentUser',
    //                     JSON.stringify({ name, token })
    //                   );

    //                 // return true to indicate successful login
    //                 return true;
    //             } else {
    //                 // return false to indicate failed login
    //                 return false;
    //             }
    //         });
    // }

    // public logout(): void {
    //     // clear token remove user from local storage to log user out
    //     this.token = null;
    //     localStorage.removeItem('currentUser');
    // }

        constructor (
            private http: HttpClient
        ) {}

        getToken() {
            return localStorage.getItem(TOKEN_NAME);
        }

        setToken(token: string) {
            localStorage.setItem(TOKEN_NAME, token);
        }

        getTokenExpirationDate(token: string): Date {
            const decoded = jwt_decode(token);

            if (decoded.exp === undefined) {
                return null;
            }

            const date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
        }

        isTokenExpired(token?: string): boolean {
            if (!token) {
                token = this.getToken();
            }

            if (!token) {
                return true;
            }

            const date = this.getTokenExpirationDate(token);
            if (date === undefined) {
                return false;
            }

            return !(date.valueOf() > new Date().valueOf());
        }

        public login(name: string, password: string) {
            const user = {
                login: name,
                password
            };
            return this.http
                .post('http://localhost:3000/api/authenticate', JSON.stringify(user))
                .map(res => res);
        }

        public logout(): void {
            // clear token remove user from local storage to log user out
            this.setToken(null);
            localStorage.removeItem(TOKEN_NAME);
        }
}
