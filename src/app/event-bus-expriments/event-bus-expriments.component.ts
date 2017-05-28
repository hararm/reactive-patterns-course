import {Component, OnInit} from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from './app-data';
import {testLessons} from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-expriments',
  templateUrl: './event-bus-expriments.component.html',
  styleUrls: ['./event-bus-expriments.component.css']
})
export class EventBusExprimentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('Top level component broadcasting all lessons ...')
    globalEventBus.next(LESSONS_LIST_AVAILABLE,
      testLessons.slice(0));
  }

  addLesson(lessonText: string) {
    globalEventBus.next(ADD_NEW_LESSON, lessonText);
  }

}
