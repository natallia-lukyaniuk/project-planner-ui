import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProjectModel as Project } from '../models';
import { IAppState } from '../store';

@Injectable()
export class ProjectsService {
  public projects: Observable<Array<Project>>;
  private projectsUrl = 'projects';

  constructor(
    private http: Http,
    private store: Store<IAppState>
  ) {
    this.projects = store.select(state => {
      console.log(state);
      return state.projects;
    });
  }

  fetchProjects() {
    return this.http.get(`http://localhost:8000/${this.projectsUrl}`)
      .map((res: Response) => {
        return res.json();
      })
      .map(payload => {
        return {type: 'FETCH_PROJECTS', payload};
      })
      .subscribe(action => {
        this.store.dispatch(action);
      });
  }

}