import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
// import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticationService } from './services/index';
import { AuthGuard } from './guards/index';
import { IAppState } from './shared/store';
import { projects } from './shared/projects/projects.reducer';
import { currentProject } from './shared/projects/current-project.reducer';
import { ProjectsService } from './projects/projects.service';
import { TaskInfoComponent } from './task/task-info/task-info.component';
import { members as projectMembers } from './shared/members/members.reducer';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './user-info/user.service';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    TaskInfoComponent,
    // MyCalendarComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NvD3Module,
    StoreModule.forRoot({
      projects,
      currentProject,
      projectMembers
    }),
    StoreDevtoolsModule.instrument(),
    // FullCalendarModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ProjectsService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ) {
  }

}
