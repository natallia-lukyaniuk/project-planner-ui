import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

// import { ProjectsActionCreator } from './projects.action-creator';
import { IAppState } from '../store';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public project: any;
  public defaultImage = 'assets/projectavatar (1).svg';

  constructor(
    private store: Store<IAppState>,
  ) { }

  ngOnInit() {
    this.project = this.store.select(state => state.projects[0]);
  }

}
