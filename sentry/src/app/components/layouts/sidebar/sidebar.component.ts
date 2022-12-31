import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ThemeService } from 'src/app/services/theme.service';
import { SidebarModeService } from 'src/app/services/sidebar-mode.service';
import { AuthService } from 'src/app/services/auth.service';

import { Theme } from 'src/app/types/type';

import { UserInterface } from 'src/app/interfaces/user-interface';
import { SidebarModeInterface } from 'src/app/interfaces/sidebar-mode-interface';
import { SidebarMenuItemInterface } from 'src/app/interfaces/sidebar-menu-item-interface';

import { SidebarMenuItemModel } from 'src/app/models/sidebar-menu-item-model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
    constructor(
        private readonly themeService: ThemeService,
        private readonly sidebarModeService: SidebarModeService,
        private readonly authService: AuthService
    ) {
        this.initUserDetails();
    }

    private _user!: UserInterface;
    private _theme!: Theme;
    private _theme$!: Subscription;
    private _mode!: SidebarModeInterface;
    private _mode$!: Subscription;

    private _menuItems: Array<SidebarMenuItemModel> = [];

    ngOnInit(): void {
        // setups
        this.setupTheme();
        this.setupSidebarMode();
        this.setupMenuItems();
    }

    ngOnDestroy(): void {
        this.closeSubscriptions();
    }

    private closeSubscriptions(): void {
        if (this._theme$) {
            this._theme$.unsubscribe();
        }
        if (this._mode$) {
            this._mode$.unsubscribe();
        }
    }

    private initUserDetails(): void {
        this.authService.user$.subscribe((user: UserInterface) => {
            this._user = user;
        });
    }

    private setupTheme(): void {
        // get the current sidebar mode
        this._theme = this.themeService.themeSingleton.theme;

        // subscribe to further changes
        this._theme$ = this.themeService.themeSingleton.theme$.subscribe({
            next: (theme: Theme) => {
                this._theme = theme;
            },
        });
    }

    private setupSidebarMode() {
        // get the current sidebar mode
        this._mode = this.sidebarModeService.sidebarModeSingleton.sidebarMode;

        // subscribe to further changes
        this._mode$ =
            this.sidebarModeService.sidebarModeSingleton.sidebarMode$.subscribe(
                {
                    next: (sidebarMode: SidebarModeInterface) => {
                        this._mode = sidebarMode;
                    },
                }
            );
    }

    private setupMenuItems(): void {
        this.PlaceholderMenuItems.forEach((item) => {
            this._menuItems.push(
                new SidebarMenuItemModel(item.route, item.icon, item.text)
            );
        });
    }

    public activateSelectedMenuItem(id: string) {
        this._menuItems.forEach((item) => (item.active = item.id === id));
        // console.table(this._menuItems);
    }

    public signOut(): void {
        this.authService.signOut();
    }

    // classifiers
    public buttonCls(): string[] {
        return this._mode['menu-item'].cls;
    }

    public buttonTextCls(): string[] {
        return this._mode['menu-item']['text-cls'];
    }

    public sidebarModeCls(): string[] {
        const minCls: string[] = [this._mode.width],
            maxCls: string[] = [this._mode.width];

        return this._mode.mode === 'min' ? minCls : maxCls;
    }
    // end classifiers

    // getters and setters
    public get user(): UserInterface {
        return this._user;
    }

    public get theme(): Theme {
        return this._theme;
    }

    public get mode(): SidebarModeInterface {
        return this._mode;
    }

    public get menuItems(): Array<SidebarMenuItemModel> {
        return this._menuItems;
    }

    public set menuItems(menuItems: Array<SidebarMenuItemModel>) {
        this._menuItems = menuItems;
    }
    // end getters and setters

    // placeholders
    private readonly PlaceholderMenuItems: Array<SidebarMenuItemInterface> = [
        {
            route: '/app/members',
            icon: 'library_books',
            text: 'Members',
        },
        {
            route: '/app/attendance',
            icon: 'calendar_month',
            text: 'Attendance',
        },
        {
            route: '/app/payments',
            icon: 'payments',
            text: 'Payments',
        },
        {
            route: '/app/organizations',
            icon: 'bubble_chart',
            text: 'Organizations & Church Groups',
        },
        {
            route: '/app/reports',
            icon: 'assignment',
            text: 'Reports',
        },
    ];
    // end placeholders
}
