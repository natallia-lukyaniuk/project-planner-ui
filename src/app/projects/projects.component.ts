import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import _ from 'lodash';

import { ProjectModel as Project } from '../shared/projects/project.model';
import { ProjectsService } from './projects.service';
// import { ProjectsActionCreator } from './projects.action-creator';
import { IAppState } from '../shared/store';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Array<Project> = [];
  private subscription: Subscription;
  public defaultImage = 'assets/projectavatar2.svg';

  constructor(
    private projectsService: ProjectsService,
    private store: Store<IAppState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log('init projects');
    this.store.select('projects').subscribe(projects => {
      console.log(projects);
      if (_.isEmpty(projects)) {
        this.projectsService.fetchProjects()
          .map(payload => {
            this.projects = payload;
            return {type: 'FETCH_PROJECTS', payload};
          })
          .subscribe(action => {
            this.store.dispatch(action);
          });
      } else {
        this.projects = projects;
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
