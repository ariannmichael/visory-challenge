import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { EventListRoutingModule } from './event-list-routing.component';

@NgModule({
  imports: [
    CommonModule,
    EventListRoutingModule
  ],
  declarations: [EventListComponent],
  exports: [EventListComponent]
})
export class EventListModule { }
