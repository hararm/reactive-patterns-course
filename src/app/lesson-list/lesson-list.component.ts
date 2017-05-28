import {Component, OnInit} from '@angular/core';
import {lessonsList$, Observer} from '../event-bus-expriments/app-data';
import {Lesson} from '../shared/model/lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lesson list component is registered as an observer ...');
    lessonsList$.subscribe(this);
  }

  ngOnInit() {

  }

  next(data: Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson...');
    lesson.completed = !lesson.completed;
  }

}
