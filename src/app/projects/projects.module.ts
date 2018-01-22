import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { FullCalendarModule } from 'ng-fullcalendar';

import { ProjectsRoutingModule, projectsRouterComponents } from './projects.routing.module';
import {
    AddProjectFormComponent,
    // ChartsComponent,
    DashboardComponent,
    DashboardFiltersComponent,
    ProjectComponent,
    ProjectsComponent,
    ProjectsService,
} from './';
import { AuthGuard } from '../guards/auth.guard';
import { TokenInterceptor } from '../services/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    NvD3Module,
    FullCalendarModule,
  ],
  declarations: [
    projectsRouterComponents,
    DashboardFiltersComponent,
  ],
  providers: [
      ProjectsService,
      AuthGuard,
      HttpClientModule,
      NvD3Module,
      // {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass: TokenInterceptor,
      //   multi: true,
      // },
    ],
})
export class ProjectsModule {
  constructor( ) { }
}
