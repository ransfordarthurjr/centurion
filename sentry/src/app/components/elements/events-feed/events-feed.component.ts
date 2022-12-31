import { Component, Input } from '@angular/core';
import { EventsGroupInterface } from 'src/app/interfaces/events-group-interface';

@Component({
    selector: 'app-events-feed',
    templateUrl: './events-feed.component.html',
    styleUrls: ['./events-feed.component.scss'],
})
export class EventsFeedComponent {
    @Input('event-groups') eventGroups!: Array<EventsGroupInterface>;

    // classifiers
    public lastCls(isLast: boolean): string[] {
        const lastCss: string[] = [
                'border-transparent',
                'dark:border-transparent',
            ],
            notLastCss: string[] = [
                'border-slate-200/60',
                'dark:border-slate-800/60',
            ];
        return isLast ? lastCss : notLastCss;
    }
    // end classifiers
}
