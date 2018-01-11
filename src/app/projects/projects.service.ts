import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { IAppState } from '../shared/store';

@Injectable()
export class ProjectsService {
  public projects: Observable<Array<Project>>;
  private projectsUrl = 'api/projects';

  constructor(
    private http: HttpClient,
    private store: Store<IAppState>
  ) {
  }

  fetchProjects() {
    return this.http.get(`http://localhost:3000/api/projects`)
      .map((res: Project[]) => {
        return res;
      });
  }

  getProject(projectId) {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}/${projectId}`)
      .map((res: Project) => {
        return res;
      });
  }

  getMembers(projectId) {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}/${projectId}/members`)
      .map((res: any[]) => res);
  }

  deleteProjectMember(projectId, memberId) {
    return this.http
      .delete(`http://localhost:3000/${this.projectsUrl}/${projectId}/delete?memberId=${memberId}`)
      .map((res: any[]) => res);
  }

}
