import { Component, Input } from '@angular/core';
import { EventInterface } from 'src/app/interfaces/event-interface';

@Component({
    selector: 'app-event-feed-item',
    templateUrl: './event-feed-item.component.html',
    styleUrls: ['./event-feed-item.component.scss'],
})
export class EventFeedItemComponent {
    @Input('events') events!: Array<EventInterface>;
}
