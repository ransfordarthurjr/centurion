import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-timestamp-card',
    templateUrl: './timestamp-card.component.html',
    styleUrls: ['./timestamp-card.component.scss'],
})
export class TimestampCardComponent {
    @Input() text: string = 'Today';
    @Input() timestamp: DateTime = DateTime.now();
    @Input() format: string = 'ccc, LLLL dd, yyyy';
}
