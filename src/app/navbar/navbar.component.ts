import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public project: any;
  public defaultImage = 'assets/projectavatar (1).svg';

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
