import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { AuthService } from 'src/app/services/auth.service';

import { DropdownMenuInterface } from 'src/app/interfaces/dropdown-menu-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(public readonly authService: AuthService) {
        this.initUserDetails();
    }

    private _notificationsMenuShown: boolean = false;

    private _user!: UserInterface;
    private _userMenu!: DropdownMenuInterface;
    private _userMenuShown: boolean = false;

    ngOnInit(): void {
        this.initUserMenu();
    }

    private initUserDetails(): void {
        this.authService.user$.subscribe((user: UserInterface) => {
            this._user = user;
        });
    }

    private initUserMenu(): void {
        this._userMenu = this.PlaceHolderUserDropdownMenu;
    }

    public closeDropDowns(outsider: string): void {
        if (this._notificationsMenuShown && outsider === 'notifications')
            this._notificationsMenuShown = false;
        if (this._userMenuShown && outsider === 'avatar')
            this._userMenuShown = false;
    }

    public toggleNotificationsMenu(): void {
        this._notificationsMenuShown = !this._notificationsMenuShown;
    }

    public toggleUserMenu(): void {
        this._userMenuShown = !this._userMenuShown;
    }

    // getters and setters
    public get user(): UserInterface {
        return this._user;
    }

    public get notificationsMenuShown(): boolean {
        return this._notificationsMenuShown;
    }

    public get userMenu(): DropdownMenuInterface {
        return this._userMenu;
    }

    public get userMenuShown(): boolean {
        return this._userMenuShown;
    }
    // end getters and setters

    private readonly PlaceHolderUserDropdownMenu: DropdownMenuInterface = {
        menuid: `${uuidv4()}`,
        menuitems: [
            [
                {
                    index: 1,
                    text: 'Edit',
                },
            ],
            [
                {
                    index: 2,
                    text: 'Archive',
                },
                {
                    index: 3,
                    text: 'Move',
                },
            ],
            [
                {
                    index: 4,
                    text: 'Share',
                },
                {
                    index: 3,
                    text: 'Add to favourites',
                },
            ],
            [
                {
                    index: 5,
                    text: 'Open Invitation for both of them',
                },
            ],
        ],
    };
}
