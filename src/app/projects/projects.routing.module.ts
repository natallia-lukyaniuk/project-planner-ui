import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AddProjectFormComponent,
    // ChartsComponent,
    DashboardComponent,
    ProjectComponent,
    ProjectsListComponent,
    ProjectsService,
    ProjectsComponent,
    ChartsComponent,
    MyCalendarComponent,
} from './';
import { TaskComponent } from '../task/task.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProjectsResolver } from '../guards/projects-resolver';
import { ProjectResolveGuard } from '../guards/project-resolve.guard';
import { MemberResolveGuard } from '../guards/members-resolve.guard';

// import { UserResolveGuard } from './../guards/user-resolve.guard';
// import { CanDeactivateGuard } from './../guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    // canActivateChild: [AuthGuard],
    children: [
        {
            path: '',
            component: ProjectsListComponent,
            resolve: {
                projects: ProjectsResolver,
            },
        },
        {
            path: 'add',
            component: AddProjectFormComponent,
        },
        {
            path: ':id',
            component: ProjectComponent,
            pathMatch: 'full',
            resolve: {
                project: ProjectResolveGuard,
                members: MemberResolveGuard,
            },
        // canDeactivate: [CanDeactivateGuard],
        // resolve: {
        //   user: UserResolveGuard
        // }
      },
        {
            path: ':id/dashboard',
            component: DashboardComponent,
            pathMatch: 'full',
        },
        {
            path: ':id/charts',
            component: ChartsComponent,
            pathMatch: 'full',
        },
        {
            path: ':id/calendar',
            component: MyCalendarComponent,
            pathMatch: 'full',
        },
    ],
  },
];

export let projectsRouterComponents = [
    AddProjectFormComponent,
    // ChartsComponent,
    DashboardComponent,
    ProjectComponent,
    ProjectsComponent,
    ProjectsListComponent,
    TaskComponent,
    ChartsComponent,
    MyCalendarComponent,
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    ProjectsService,
    AuthGuard,
    ProjectsResolver,
    ProjectResolveGuard,
    MemberResolveGuard,
  ],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
