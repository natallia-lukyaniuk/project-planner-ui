import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id) {
    return this.http.get(`http://localhost:3000/api/users/${id}`)
      .map(res => res);
  }

}
