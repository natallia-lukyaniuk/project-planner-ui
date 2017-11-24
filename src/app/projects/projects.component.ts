import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { ProjectModel as Project } from '../models';
import { ProjectsService } from './projects.service';
// import { ProjectsActionCreator } from './projects.action-creator';
import { IAppState } from '../store';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Observable<Array<Project>>;
  private subscription: Subscription;
  public defaultImage = 'assets/projectavatar (1).svg';

  constructor(
    private projectsService: ProjectsService,
    private store: Store<IAppState>,
    // private projectsActionCreator: ProjectsActionCreator
  ) {
    this.projects = this.projectsService.projects;
    // this.projectsService
    //   .fetchProjects().subscribe(projects => {
    //     console.log('1', projects);
    //     this.store.dispatch({type: 'FETCH_PROJECTS', projects});
    //     this.projects = this.store.select('projects');
    //     console.log('2', this.projects);
    //   });
    }

    ngOnInit() {
      this.subscription = this.projects.subscribe(
        projects => {},
        error => {}
      );
      this.projectsService.fetchProjects();
      console.log(this.projects);
  }

  onDestroy() {
      this.subscription.unsubscribe();
  }
}
