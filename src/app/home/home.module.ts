import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeRoutingModule,  homeRouterComponents } from './home.routing.module';
// import {
//     AddProjectFormComponent,
//     // ChartsComponent,
//     DashboardComponent,
//     DashboardFiltersComponent,
//     ProjectComponent,
//     ProjectsComponent,
//     ProjectsService,
// } from './';
import { AuthGuard } from '../guards/auth.guard';
import { TokenInterceptor } from '../services/token.interceptor';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  declarations: [
    homeRouterComponents,
    HomeComponent,
    NavbarComponent,
  ],
  providers: [
      AuthGuard,
      HttpClientModule,
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: TokenInterceptor,
    //     multi: true,
    //   },
    ],
})
export class HomeModule {
  constructor( ) { }
}
