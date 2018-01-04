import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { IAppState } from '../shared/store';

@Injectable()
export class ProjectsService {
  public projects: Observable<Array<Project>>;
  private projectsUrl = 'projects';

  constructor(
    private http: Http,
    private store: Store<IAppState>
  ) {
  }

  fetchProjects() {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}`)
      .map((res: Response) => {
        return res.json();
      });
      // .map(payload => {
      //   return {type: 'FETCH_PROJECTS', payload};
      // })
      // .subscribe(action => {
      //   this.store.dispatch(action);
      // });
  }

  getProject(projectId) {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}/${projectId}`)
      .map((res: Response) => {
        return res.json();
      });
  }

  getMembers(projectId) {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}/${projectId}/members`)
      .map(res => res.json());
  }

  deleteProjectMember(projectId, memberId) {
    return this.http
      .delete(`http://localhost:3000/${this.projectsUrl}/${projectId}/delete?memberId=${memberId}`)
      .map(res => res);
  }

}
