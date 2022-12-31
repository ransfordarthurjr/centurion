import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-notification-item',
    templateUrl: './notification-item.component.html',
    styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {
    @Input() id!: string;
    @Input() timestamp!: string;
    @Input('due-date') dueDate!: string;
    @Input() index?: number;
    @Input() icon?: string;
    @Input() title!: string;
    @Input() notice!: string;

    private _relativeTime!: string | null;

    // component life cycle events
    ngOnInit(): void {
        this._relativeTime = DateTime.fromISO(this.dueDate).toRelative();
    }
    // end component life cycle events

    // getters and setters
    public get relativeTime(): string | null {
        return this._relativeTime;
    }
    // end getters and setters
}
