import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

import { AuthService } from 'src/app/services/auth.service';

import { UserInterface } from 'src/app/interfaces/user-interface';
import { EventsGroupInterface } from 'src/app/interfaces/events-group-interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    host: {
        class: 'sentry-app-route-component',
    },
})
export class HomeComponent implements OnInit {
    constructor(private readonly authService: AuthService) {
        this.initUserDetails();
    }

    private _user!: UserInterface;
    private _timestamp!: DateTime;
    private _greeting: string = '';

    private _eventGroups!: Array<EventsGroupInterface>;

    ngOnInit(): void {
        this.initTimestamp();
        this.initEvents();
    }

    private initUserDetails(): void {
        this.authService.user$.subscribe((user: UserInterface) => {
            this._user = user;
        });
    }

    private initTimestamp() {
        this._timestamp = DateTime.now();
        if (this._timestamp.hour >= 0 && this._timestamp.hour <= 11) {
            this._greeting = 'Good morning';
        } else if (this._timestamp.hour >= 12 && this._timestamp.hour <= 17) {
            this._greeting = 'Good afternoon';
        } else if (this._timestamp.hour >= 18 && this._timestamp.hour <= 21) {
            this._greeting = 'Good evening';
        } else if (this._timestamp.hour >= 22 && this._timestamp.hour <= 23) {
            this._greeting = 'Good night';
        }
    }

    private initEvents(): void {
        this._eventGroups = this.PlaceholderEvents;
    }

    // getters and setters
    public get user(): UserInterface {
        return this._user;
    }

    public get timestamp(): DateTime {
        return this._timestamp;
    }

    public get greeting(): string {
        return this._greeting;
    }

    public get eventGroups(): Array<EventsGroupInterface> {
        return this._eventGroups;
    }
    // end getters and setters

    private readonly PlaceholderEvents: Array<EventsGroupInterface> = [
        {
            date: 'Date 1',
            events: [
                {
                    id: '',
                    title: 'Title 1',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste eaque recusandae minima hic rem quaerat quis asperiores, cum ipsa modi eligendi officia architecto sunt, voluptatibus aliquam quas ratione earum.',
                },
                {
                    id: '',
                    title: 'Title 2',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste eaque recusandae minima hic rem quaerat quis asperiores, cum ipsa modi eligendi officia architecto sunt, voluptatibus aliquam quas ratione earum.',
                },
            ],
        },
        {
            date: 'Date 2',
            events: [
                {
                    id: '',
                    title: 'Title 3',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste eaque recusandae minima hic rem quaerat quis asperiores, cum ipsa modi eligendi officia architecto sunt, voluptatibus aliquam quas ratione earum.',
                },
            ],
        },
        {
            date: 'Date 3',
            events: [
                {
                    id: '',
                    title: 'Title 4',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste eaque recusandae minima hic rem quaerat quis asperiores, cum ipsa modi eligendi officia architecto sunt, voluptatibus aliquam quas ratione earum.',
                },
                {
                    id: '',
                    title: 'Title 5',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste eaque recusandae minima hic rem quaerat quis asperiores, cum ipsa modi eligendi officia architecto sunt, voluptatibus aliquam quas ratione earum.',
                },
                {
                    id: '',
                    title: 'Title 6',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste eaque recusandae minima hic rem quaerat quis asperiores, cum ipsa modi eligendi officia architecto sunt, voluptatibus aliquam quas ratione earum.',
                },
            ],
        },
    ];
}
