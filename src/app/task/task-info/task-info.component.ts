import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTypes } from '../../shared/tasks/task-types';
import { Store } from '@ngrx/store';
import { IAppState } from '../../shared/store';

@Component({
  selector: 'task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss'],
  providers: [TaskService],
})
export class TaskInfoComponent implements OnInit {
  public task: any;
  public taskTypes: any;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private router: Router,
  ) {
    // this.taskTypes = TaskTypes;
    // this.route.params.subscribe((params) => {
    //   this.taskService.getTask(params.id)
    //     .subscribe(task => {
    //       this.task = task;
    //   });
    // });
  }

  ngOnInit() {
    this.taskTypes = TaskTypes;
    this.route.params.subscribe((params) => {
      this.taskService.getTask(params.id)
        .subscribe(task => {
          this.task = task;
      });
    });
  }

  changeStatus(event) {
    const userId = this.task.user._id;
    delete this.task.user;
    const status = Number(event.target.value);
    const payload = {...this.task, status, userId};
    this.taskService.updateTask(payload)
      .subscribe(res => {
        this.store.dispatch({type: 'CHANGE_TASK-STATUS', payload});
        this.router.navigate(['/projects', this.task.projectId, 'dashboard']);
      });
  }

}
