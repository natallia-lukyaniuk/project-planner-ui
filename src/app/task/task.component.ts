import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;

  constructor() { }

  ngOnInit() {

  }

}