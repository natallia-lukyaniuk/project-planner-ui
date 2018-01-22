import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './guards/auth.guard';
import { TaskInfoComponent } from './task/task-info/task-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RegistrateComponent } from './registrate/registrate.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrate',
    component: RegistrateComponent,
  },
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule',
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [
    AuthGuard,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
