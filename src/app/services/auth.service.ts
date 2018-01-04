import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    public login(name: string, password: string): Observable<boolean> {
        const user = {
            login: name,
            password
        };
        console.log(JSON.stringify(user));
        return this.http
          .post('http://localhost:3000/api/authenticate', JSON.stringify({
                body: user,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
          }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response.json() && response.json().token;
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
