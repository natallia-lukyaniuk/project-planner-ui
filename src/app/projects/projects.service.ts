import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import _ from 'lodash';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { IAppState } from '../shared/store';
import { Member } from '../shared/members/member.model';

@Injectable()
export class ProjectsService {
  public projects: Observable<Array<Project>>;
  private projectsUrl = 'api/projects';

  constructor(
    private http: HttpClient,
    private store: Store<IAppState>,
    private router: Router,
  ) {
  }

  fetchProjects() {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}`)
      .map((res: Project[]) => {
        if (_.has(res, 'success')) {
         this.router.navigate(['/login']);
        }
        return res;
      });
  }

  getProject(projectId): any {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}/${projectId}`);
  }

  getMembers(projectId): Observable<any> {
    return this.http.get(`http://localhost:3000/${this.projectsUrl}/${projectId}/members`);
  }

  deleteProjectMember(projectId, memberId) {
    return this.http
      .delete(`http://localhost:3000/${this.projectsUrl}/${projectId}/delete?memberId=${memberId}`);
  }

}
