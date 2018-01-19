import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import _ from 'lodash';

import { ProjectModel as Project } from '../../shared/projects/project.model';
import { ProjectsService } from '../projects.service';
// import { ProjectsActionCreator } from './projects.action-creator';
import { IAppState } from '../../shared/store';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  public projects: Array<Project> = [];
  private subscription: Subscription;
  public defaultImage = 'assets/projectavatar2.svg';

  constructor(
    private projectsService: ProjectsService,
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.projects) {
        this.projects = data.projects;
        // this.originalUser = Object.assign({}, data.user);
      } else {
        // this.user = new User(null, '', '', '', null,  '', new Address('', '', null));
      }
    });
  }

  onDestroy() {
      // this.subscription.unsubscribe();
  }

  selectProject(project) {
    this.router.navigate(['/projects', project._id]);
    // this.projectsService.getProject(project._id)
    //   .subscribe((proj) => {
    //     this.store.dispatch({type: 'SELECT_PROJECT', payload: proj});
    //   });
  }
}
