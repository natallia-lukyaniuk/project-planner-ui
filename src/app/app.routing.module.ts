import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './guards/auth.guard';
import { TaskInfoComponent } from './task/task-info/task-info.component';
// import { MyCalendarComponent } from './calendar/calendar.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    component: UserInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: 'app/projects/projects.module#ProjectsModule',
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
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
