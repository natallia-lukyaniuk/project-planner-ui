import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    public user: any = {};
    public loading = false;
    public error = '';
    private returnUrl: string;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    public login() {
        this.loading = true;
        this.authenticationService.login(this.user.name, this.user.password)
            .subscribe((result: any) => {
                if (result.success) {
                    this.authenticationService.setToken(result.token);
                    this.router.navigateByUrl(this.returnUrl);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
