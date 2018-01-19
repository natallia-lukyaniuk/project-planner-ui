import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Store } from '@ngrx/store';

import { ProjectModel as Project } from '../../shared/projects/project.model';
import { IAppState } from '../../shared/store';
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
    this.route.data.subscribe(data => {
      this.project = data.project || {};
      this.members = data.members || {};
    });
  }

  deleteProjectMember(id) {
    this.projectsService.deleteProjectMember(this.project._id, id)
      .subscribe(res => {
        this.store.dispatch({type: 'DELETE_PROJECT_MEMBER', payload: id});
      });
  }
}
