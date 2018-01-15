import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UserResponse } from './user-response.model';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    public getToken() {
        return this.token;
    }

    public login(name: string, password: string): Observable<boolean> {
        const user = {
            login: name,
            password
        };
        const headers = new Headers();
        headers.append('Authorization', 'my-auth-token');
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({headers: headers});
        return this.http
          .post('http://localhost:3000/api/authenticate', JSON.stringify(user))
            .map((response: UserResponse) => {
                // login successful if there's a jwt token in the response
                const token = response.token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage
                      .setItem(
                        'currentUser',
                        JSON.stringify({ name, token })
                      );

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    public logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
