import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectComponent } from './project/project.component';
import { TaskInfoComponent } from './task/task-info/task-info.component';
import { ChartsComponent } from './charts/charts.component';
// import { MyCalendarComponent } from './calendar/calendar.component';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/add',
    component: AddProjectFormComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'users/:id',
    component: UserInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:id/dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:id/charts',
    component: ChartsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
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
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
