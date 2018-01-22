import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskInfoComponent } from '../task/task-info/task-info.component';
import { AuthGuard } from '../guards/auth.guard';
import { UserInfoComponent } from '../user-info/user-info.component';
import { HomeComponent } from './home.component';


// import { UserResolveGuard } from './../guards/user-resolve.guard';
// import { CanDeactivateGuard } from './../guards/can-deactivate.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'users/:id',
                component: UserInfoComponent,
            },
            {
                path: 'projects',
                loadChildren: 'app/projects/projects.module#ProjectsModule',
                canActivateChild: [AuthGuard],
            },
            // {
            //   path: 'projects/:id/calendar',
            //   component: MyCalendarComponent,
            //   pathMatch: 'full'
            // },
            {
                path: 'tasks/:id',
                component: TaskInfoComponent,
                pathMatch: 'full',
            },
        ],
  },
];

export let homeRouterComponents = [
    TaskInfoComponent,
    UserInfoComponent,
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    AuthGuard,
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
