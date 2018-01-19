import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../shared/store';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

import { ProjectsService } from '../../projects/projects.service';
import { ProjectModel as Project } from '../../shared/projects/project.model';
import { TasksStatuses } from '../../shared/tasks/tasks-statuses';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public project: Project;
  public tasks: any = {};

  constructor(
    private store: Store<IAppState>,
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store.select('currentProject').subscribe(project => {
        if (!_.isEmpty(project)) {
          this.project = project;
          this.tasks = {
            toDo: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.toDo),
            inProgress: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.inProgress),
            readyForQA: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.readyForQA),
            done: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.done)
          };
        } else {
          this.projectsService.getProject(params.id)
            .subscribe(project => {
              this.project = project;
              this.store.dispatch({type: 'SELECT_PROJECT', payload: project});
              this.tasks = {
                toDo: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.toDo),
                inProgress: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.inProgress),
                readyForQA: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.readyForQA),
                done: this.project.tasks.filter(task => Number(task.status) === TasksStatuses.done)
              };
            });
        }
      });
  });
  }
}
