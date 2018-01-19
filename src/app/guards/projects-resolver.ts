import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import _ from 'lodash';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { ProjectsService } from '../projects/projects.service';
import { IAppState } from '../shared/store';

@Injectable()

export class ProjectsResolver implements Resolve<Observable<Project>> {

    constructor(
        private projectsService: ProjectsService,
        private store: Store<IAppState>,
    ) {}

    resolve (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any {
        return this.projectsService.fetchProjects();
        // return this.store.select('projects').subscribe(projects => {
        //     if (_.isEmpty(projects)) {
        //         debugger;
        //         return this.projectsService.fetchProjects();
        //     } else {
        //         debugger;
        //         return projects;
        //     }
        // });
    }
}
