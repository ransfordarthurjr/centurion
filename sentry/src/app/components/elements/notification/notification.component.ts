import { Component, HostListener, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { NotificationItemInterface } from 'src/app/interfaces/notification-item-interface';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    animations: [
        trigger('animateinout', [
            transition(':enter', [
                style({ opacity: 0 }), //apply default styles before animation starts
                animate('300ms ease-in-out', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1 }), //apply default styles before animation starts
                animate('300ms ease-in-out', style({ opacity: 0 })),
            ]),
        ]),
    ],
})
export class NotificationComponent implements OnInit {
    constructor() {
        this.initNotificationItems();
    }

    @Input() shown: boolean = false;

    // component lifecyle and event hooks
    ngOnInit(): void {
        this.fetchNotifications();
    }

    // remove menu from screen
    // when user hit ESC key
    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
        event: KeyboardEvent
    ) {
        // console.log(event);
        if (this.shown) this.shown = false;
    }
    // end component lifecyle and event hooks

    private _notifications!: Array<NotificationItemInterface>;

    private initNotificationItems(): void {
        this._notifications = [];
    }

    private fetchNotifications(): void {
        this._notifications = this.PlaceholderNotifications;
    }

    public closeNotifications(): void {
        this.shown = false;
    }

    // getters and setters
    public get notifications(): Array<NotificationItemInterface> {
        return this._notifications;
    }
    // end getters and setters

    private readonly PlaceholderNotifications: Array<NotificationItemInterface> =
        [
            {
                id: 'e354873f-b9f4-443d-812b-5b9a846dbdac',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2020-06-01T01:01:00',
                index: 1,
                title: 'Notification 1',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'diversity_1',
            },
            {
                id: 'e69f82a3-b1f6-4785-a1a6-c0fb6a6aa62d',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-04-02T02:02:00',
                index: 2,
                title: 'Notification 2',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'rocket_launch',
            },
            {
                id: '81397adc-f5f3-48bc-9799-0705d54f9ad4',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-20T09:03:00',
                index: 3,
                title: 'Notification 3',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'diversity_1',
            },
            {
                id: '30613082-8c0c-4d46-bc7d-cda59153b2f0',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-20T16:36:00',
                index: 4,
                title: 'Notification 4',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'diversity_1',
            },
            {
                id: '075a4789-fbdb-423e-94ec-ac95bc485bd9',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-05T05:05:00',
                index: 5,
                title: 'Notification 5',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
            },
            {
                id: '491d562b-59e0-4dbd-95fb-62d8ed22dd5c',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-06T06:06:00',
                index: 6,
                title: 'Notification 6',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'event_available',
            },
            {
                id: '84bd63ab-54e5-40cc-b247-994e715a0924',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-07T07:07:00',
                index: 7,
                title: 'Notification 7',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
            },
            {
                id: 'fb6f38e0-94a2-4ad6-91f8-54478bdf560f',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-08T08:08:00',
                index: 8,
                title: 'Notification 8',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'today',
            },
            {
                id: 'e03c8553-0612-40d2-b8b0-402d7da38dd9',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-09T09:09:00',
                index: 9,
                title: 'Notification 9',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'event_available',
            },
            {
                id: '12b0f475-5e8a-43f3-a605-34cfb3a4d5e7',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-10T10:10:00',
                index: 10,
                title: 'Notification 10',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
                icon: 'event_available',
            },
            {
                id: '7ccf9b96-f1bf-473c-a9b8-56e92dda0e34',
                timestamp: '2022-12-20T16:40:00',
                dueDate: '2022-12-11T11:11:00',
                index: 11,
                title: 'Notification 11',
                notice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi neque aspernatur quasi necessitatibus nobis quos? Dolorum suscipit necessitatibus, repellendus sunt pariatur laborum excepturi, soluta dolorem aliquid possimus in vero.',
            },
        ];
}
