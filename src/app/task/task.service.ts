import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {
  private taskUrl = 'tasks';

  constructor(private http: Http) { }

  getTask(taskId) {
    return this.http.get(`http://localhost:8000/${this.taskUrl}/${taskId}`)
      .map(res => res.json());
  }

}