import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../shared/store';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss']
})
export class AddProjectFormComponent implements OnInit {

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }

  addProject() {
    const payload = {
      title: 'Project1',
      description: 'Lorem ipsum'
    };
    this.store.dispatch({type: 'ADD_PROJECT', payload});
    this.router.navigate(['./projects']);
  }
}
