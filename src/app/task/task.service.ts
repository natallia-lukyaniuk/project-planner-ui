import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {
  private taskUrl = 'tasks';

  constructor(private http: HttpClient) { }

  getTask(taskId) {
    return this.http.get(`http://localhost:3000/${this.taskUrl}/${taskId}`)
      .map(res => res);
  }
}
