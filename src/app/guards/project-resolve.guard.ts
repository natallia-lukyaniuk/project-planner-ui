import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class ProjectResolveGuard implements Resolve<any> {
  constructor(
    private projectsService: ProjectsService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params['id'];

    return this.projectsService.getProject(id);
  }
}
