import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { chartOptions } from './charts.config';
import { chartTypes } from './chartTypes';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss', '../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {
  public options;
  public data;
  public type: string = 'simpleLine';
  public types: string[] = chartTypes;

  ngOnInit() {
    this.options = chartOptions;
    this.options.chart.type = chartTypes[2];

    this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label' : 'To Do' ,
            'value' : 2
          } ,
          {
            'label' : 'In Progress' ,
            'value' : 1
          } ,
          {
            'label' : 'Ready For QA' ,
            'value' : 1
          } ,
          {
            'label' : 'Done' ,
            'value' : 3
          }
        ]
      }
    ];
  }

}
