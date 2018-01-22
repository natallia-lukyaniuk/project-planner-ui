import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
// import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticationService } from './services/index';
import { AuthGuard } from './guards/index';
import { IAppState } from './shared/store';
import { projects } from './shared/projects/projects.reducer';
import { currentProject } from './shared/projects/current-project.reducer';
import { members as projectMembers } from './shared/members/members.reducer';
import { UserService } from './user-info/user.service';
import { TokenInterceptor } from './services/token.interceptor';
import { RegistrateComponent } from './registrate/registrate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrateComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      projects,
      currentProject,
      projectMembers,
    }),
    StoreDevtoolsModule.instrument(),
    // FullCalendarModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
  ) {
  }

}
