import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {
  private taskUrl = 'api/tasks';

  constructor(private http: HttpClient) { }

  getTask(taskId) {
    return this.http.get(`http://localhost:3000/${this.taskUrl}/${taskId}`)
      .map(res => res);
  }

  updateTask(task) {
    const taskObject = JSON.stringify(task);
    return this.http.put(
      `http://localhost:3000/${this.taskUrl}/${task._id}`,
      taskObject,
    )
      .map(res => {
        return res;
      });
  }
}
