import {
    AfterContentInit,
    AfterViewInit,
    Component,
    OnInit,
} from '@angular/core';
import { DateTime } from 'luxon';

import { AuthService } from 'src/app/services/auth.service';
import { Util } from 'src/app/utils/util';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    host: {
        class: 'main-route-component',
    },
})
export class AuthComponent implements OnInit, AfterViewInit, AfterContentInit {
    constructor(private readonly authService: AuthService) {
        this._bgImageSrc = this._images[0];
        this._timestamp = DateTime.now();
    }

    private _timestamp: DateTime;
    private _bgImageSrc: string;

    private _images: string[] = [
        'assets/images/auth-bgs/signin-side-bg-01.jpg',
        'assets/images/auth-bgs/signin-side-bg-02.jpg',
        'assets/images/auth-bgs/signin-side-bg-03.jpg',
        'assets/images/auth-bgs/signin-side-bg-04.jpg',
        'assets/images/auth-bgs/signin-side-bg-05.jpg',
        'assets/images/auth-bgs/signin-side-bg-06.jpg',
        'assets/images/auth-bgs/signin-side-bg-07.jpg',
        'assets/images/auth-bgs/signin-side-bg-08.jpg',
        'assets/images/auth-bgs/signin-side-bg-09.jpg',
        'assets/images/auth-bgs/signin-side-bg-10.jpg',
        'assets/images/auth-bgs/signin-side-bg-11.jpg',
        'assets/images/auth-bgs/signin-side-bg-12.jpg',
    ];

    ngOnInit(): void {
        // console.log('ngOnInit');
        this._bgImageSrc =
            this._images[Util.GetRandomInRange(0, this._images.length - 1)];
    }

    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit');
    }

    ngAfterContentInit(): void {
        // console.log('ngAfterContentInit');
    }

    public signIn(): void {
        this.authService.signIn();
    }

    public signOut(): void {
        this.authService.signOut();
    }

    // getters and setters
    public get bgImageSrc(): string {
        return this._bgImageSrc;
    }

    public get timestamp(): DateTime {
        return this._timestamp;
    }
    // end getters and setters
}
