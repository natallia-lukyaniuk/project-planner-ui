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
        // return this.http
        //   .post('/api/authenticate', JSON.stringify({ name, password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         const token = response.json() && response.json().token;
        //         if (token) {
        //             // set token property
        //             this.token = token;

        //             // store username and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage
        //               .setItem(
        //                 'currentUser',
        //                 JSON.stringify({ name, token })
        //               );

        //             // return true to indicate successful login
        //             return true;
        //         } else {
        //             // return false to indicate failed login
        //             return false;
        //         }
        //     });
        localStorage
          .setItem(
            'currentUser',
            JSON.stringify({ name })
          );
        return Observable.of(true);
    }

    public logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
