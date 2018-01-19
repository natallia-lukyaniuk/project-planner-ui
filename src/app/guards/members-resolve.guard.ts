import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { ProjectsService } from '../projects/projects.service';
import { Member } from '../shared/members/member.model';

@Injectable()
export class MemberResolveGuard implements Resolve<Member[]> {
  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<Member[]> {
    const id = route.params['id'];

    return this.projectsService.getMembers(id);
  }
}
