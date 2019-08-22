import { Component } from '@angular/core';
import { EventModel } from '../models/EventModel';
import { EventsService } from '../services/EventsService';
import { Observable, throwError } from 'rxjs'

@Component({
  selector: 'events-list-component',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  isExpanded = false;
  public events: Observable<EventModel[]>;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.GetAllUsers();
  }

  public GetAllUsers() {
    this.events = this.eventService.GetAllEvents();
  }
}
