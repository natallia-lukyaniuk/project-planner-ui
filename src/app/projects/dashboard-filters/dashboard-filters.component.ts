import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

import { IAppState } from '../../shared/store';
import { ProjectsService } from '..//projects.service';

@Component({
  selector: 'dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.scss']
})
export class DashboardFiltersComponent implements OnInit {
  public members: any[];

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store.select('projectMembers').subscribe(members => {
        if (!_.isEmpty(members)) {
          this.members = members;
        } else {
          this.projectsService.getMembers(params.id)
            .subscribe(members => {
              this.members = members;
              this.store.dispatch({type: 'FETCH_MEMBERS', payload: members});
            });
        }
      });
    });
  }

  filterTasks(memberId) {
    // this.store.dispatch({type: 'FILTER_'})
  }
}
