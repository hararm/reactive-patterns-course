import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBusExprimentsComponent } from './event-bus-expriments.component';

describe('EventBusExprimentsComponent', () => {
  let component: EventBusExprimentsComponent;
  let fixture: ComponentFixture<EventBusExprimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBusExprimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBusExprimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
