import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticationService } from './services/index';
import { AuthGuard } from './guards/index';
import { IAppState } from './shared/store';
import { projects } from './shared/projects/projects.reducer';
import { currentProject } from './shared/projects/current-project.reducer';
import { ProjectsService } from './projects/projects.service';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { TaskInfoComponent } from './task/task-info/task-info.component';
import { members as projectMembers } from './shared/members/members.reducer';
import { ChartsComponent } from './charts/charts.component';
import { DashboardFiltersComponent } from './dashboard-filters/dashboard-filters.component';
import { MyCalendarComponent } from './calendar/calendar.component';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './user-info/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectsComponent,
    TaskComponent,
    ProjectComponent,
    TaskInfoComponent,
    ChartsComponent,
    DashboardFiltersComponent,
    MyCalendarComponent,
    AddProjectFormComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NvD3Module,
    StoreModule.forRoot({
      projects,
      currentProject,
      projectMembers
    }),
    StoreDevtoolsModule.instrument(),
    FullCalendarModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ProjectsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ) {
  }

}
