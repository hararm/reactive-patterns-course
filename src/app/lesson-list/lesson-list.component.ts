import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {lessonsList$, Observer} from '../event-bus-expriments/app-data';
import {Lesson} from '../shared/model/lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  ngOnInit() {
    lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(this.lessons, lesson => lesson.id === deleted.id);
  }

}
