import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExprimentsComponent } from './event-bus-expriments/event-bus-expriments.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    BrowserEventExperimentsComponent,
    BrowserEventExperimentsComponent,
    EventBusExprimentsComponent,
    LessonListComponent,
    LessonsCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
