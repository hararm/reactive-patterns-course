import {Component, OnInit} from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE, Observer} from '../event-bus-expriments/event-bus';
import {Lesson} from '../shared/model/lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lesson list component is registered as an observer ...')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText,
          duration: '9:00'
        });
      }
    });
  }

  ngOnInit() {

  }

  notify(data: Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson...');
    lesson.completed = !lesson.completed;
  }

}
