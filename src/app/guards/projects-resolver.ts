import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import _ from 'lodash';
import { ProjectModel as Project } from '../shared/projects/project.model';
import { ProjectsService } from '../projects/projects.service';
import { IAppState } from '../shared/store';

@Injectable()

export class ProjectsResolver implements Resolve<Project> {
    private projects: Project[];

    constructor(
        private projectsService: ProjectsService,
        private store: Store<IAppState>,
    ) {}

    resolve (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        this.store.select('projects').subscribe(projects => {
            if (_.isEmpty(projects)) {
                this.projectsService.fetchProjects()
                .map(payload => {
                    this.projects = payload;
                    return {type: 'FETCH_PROJECTS', payload};
                })
                .subscribe(action => {
                    this.store.dispatch(action);
                    return this.projects;
                });
            } else {
                this.projects = projects;
                return this.projects;
            }
        });
    }
}
