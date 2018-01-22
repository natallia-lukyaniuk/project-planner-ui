import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

// import { ProjectsActionCreator } from './projects.action-creator';
import { IAppState } from '../shared/store';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public project: any;
  public defaultImage = 'assets/projectavatar (1).svg';

  constructor(
    private store: Store<IAppState>,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.select('currentProject').subscribe(project => {
      this.project = project || '';
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
