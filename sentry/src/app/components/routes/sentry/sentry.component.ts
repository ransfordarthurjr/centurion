import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-sentry',
    templateUrl: './sentry.component.html',
    styleUrls: ['./sentry.component.scss'],
    host: {
        class: 'main-route-component',
    },
})
export class SentryComponent implements OnInit, OnDestroy {
    constructor() {}

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    // getter and setters
    // end getters and setters
}
