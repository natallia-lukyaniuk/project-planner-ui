import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { NgRedux, NgReduxModule} from 'ng2-redux';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticationService } from './services/index';
import { AuthGuard } from './guards/index';
import { IAppState, rootReducer, INITIAL_STATE} from './store';
import {projects as ProjectReducer} from './projects.reducer';
import { ProjectsService } from './projects/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      projects: ProjectReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ) {
  }

}
