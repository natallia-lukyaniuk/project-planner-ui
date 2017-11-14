import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public project: any;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      const store = this.ngRedux.getState();
      this.project = store.project;
    });
    const store = this.ngRedux.getState();
    this.project = store.project;
  }

}
