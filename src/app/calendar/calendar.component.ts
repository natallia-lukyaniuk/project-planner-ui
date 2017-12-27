import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Store } from '@ngrx/Store';
import { Router } from '@angular/router';

import { IAppState } from '../shared/store';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyCalendarComponent implements OnInit {
  calendarOptions: Options;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(
    public router: Router
    // private store: Store<IAppState>
  ) {}
  ngOnInit() {
    const data = [
      {
        title: 'Event',
        start: '2017-12-01T09:22:55+00:00',
        end: '2017-12-01T10:22:55+00:00'
      },
      {
        title: 'Собрание с членами команды',
        start: '2017-12-01T09:22:55+00:00',
        end: '2017-12-01T10:22:55+00:00'
      },
      {
        title: 'Встреча с заказчиком',
        start: '2017-12-12T09:22:55+00:00',
        end: '2017-12-12T10:22:55+00:00'
      },
      {
        title: 'Обусуждение вопросов по новому проекту',
        start: '2017-12-12T09:22:55+00:00',
        end: '2017-12-12T10:22:55+00:00'
      },
      {
        title: 'Представление новых членов команды',
        start: '2017-12-15T09:22:55+00:00',
        end: '2017-12-15T10:22:55+00:00'
      },
      {
        title: 'Информирование о новых событиях',
        start: '2017-12-19T09:22:55+00:00',
        end: '2017-12-20T10:22:55+00:00'
      },
      {
        title: 'Начало новой итерации',
        start: '2017-12-9T09:22:55+00:00',
        end: '2017-12-9T10:22:55+00:00'
      },
      {
        title: 'Информирование о новостях на проекте',
        start: '2017-12-17T09:22:55+00:00',
        end: '2017-12-17T10:22:55+00:00'
      }
    ];
     this.calendarOptions = {
        editable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        eventLimit: true, // for all non-agenda views
        views: {
          month: {
            eventLimit: 5 // adjust to 6 only for agendaWeek/agendaDay
          }
        },
        events: data
      };
  }

  eventClick(eventDetails) {
    this.router.navigate(['tasks', '5a19783cb7ac38032cb6179b']);
  }

}
