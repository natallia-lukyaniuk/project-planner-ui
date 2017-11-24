import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public project: any;

  constructor(
  ) { }

  ngOnInit() {

  }

}
