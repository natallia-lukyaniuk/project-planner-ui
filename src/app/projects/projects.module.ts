import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectsRoutingModule, projectsRouterComponents } from './projects.routing.module';
import {
    AddProjectFormComponent,
    // ChartsComponent,
    DashboardComponent,
    DashboardFiltersComponent,
    ProjectComponent,
    ProjectsComponent,
    ProjectsService
} from './';
import { AuthGuard } from '../guards/auth.guard';
import { TokenInterceptor } from '../services/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ],
  declarations: [
    projectsRouterComponents,
    DashboardFiltersComponent
  ],
  providers: [
      ProjectsService,
      AuthGuard,
      HttpClientModule,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
    ]
})
export class ProjectsModule {
  constructor( ) { }
}
