import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects/projects.service';
import { Store } from '@ngrx/store';

import { ProjectModel as Project } from '../shared/projects/project.model';
import { IAppState } from '../shared/store';
import _ from 'lodash';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // todo: check types
  public project: Project;
  public members: any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private projectsService: ProjectsService,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store.select('currentProject').subscribe(project => {
        if (!_.isEmpty(project)) {
          this.project = project;
        } else {
          this.projectsService.getProject(params.id)
          .subscribe(project => {
              this.project = project;
              this.store.dispatch({type: 'SELECT_PROJECT', payload: project});
            });
        }
      });
      this.store.select('projectMembers').subscribe(members => {
        if (!_.isEmpty(members)) {
          this.members = members;
        } else {
          this.projectsService.getMembers(params.id)
            .subscribe(members => {
              this.members = members;
              this.store.dispatch({type: 'FETCH_MEMBERS', payload: members});
            });
        }
      });
    });
  }

  deleteProjectMember(id) {
    this.projectsService.deleteProjectMember(this.project._id, id)
      .subscribe(res => {
        this.store.dispatch({type: 'DELETE_PROJECT_MEMBER', payload: id});
      });
  }
}
