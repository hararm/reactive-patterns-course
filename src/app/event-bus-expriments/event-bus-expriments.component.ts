import {Component, OnInit} from '@angular/core';
import {testLessons} from '../shared/model/test-lessons';
import {initializeLessonsList} from './app-data';
import {setTimeout} from "timers";

@Component({
  selector: 'event-bus-expriments',
  templateUrl: './event-bus-expriments.component.html',
  styleUrls: ['./event-bus-expriments.component.css']
})
export class EventBusExprimentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    console.log('Top level component broadcasting all lessons ...');
    initializeLessonsList(testLessons.slice(0));

    setTimeout(() => {
        const newLesson = {
          id: Math.random(),
          description: 'New lesson arriving from the backend'
        };
        // TODO
      }, 10000 );



  }

  addLesson(lessonText: string) {
    // TODO
  }

}
