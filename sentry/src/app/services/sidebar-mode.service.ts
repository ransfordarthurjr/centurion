import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { SidebarModeInterface } from '../interfaces/sidebar-mode-interface';
import { Mode } from '../types/type';
import { SidebarModeSingleton } from '../singletons/sidebar-mode-singleton';

@Injectable({
    providedIn: 'root',
})
export class SidebarModeService {
    constructor(private localStorage: LocalStorageService) {
        this._sidebarModeSingleton = SidebarModeSingleton.getInstance();
    }

    public static readonly MIN_MODE: Mode = 'min';
    public static readonly MAX_MODE: Mode = 'max';

    public static readonly MIN_SIDEBAR_MODE: SidebarModeInterface = {
        mode: SidebarModeService.MIN_MODE,
        width: 'w-[88px]',

        'menu-item': {
            cls: ['justify-center'],
            'text-cls': ['hidden'],
        },
    };
    public static readonly MAX_SIDEBAR_MODE: SidebarModeInterface = {
        mode: SidebarModeService.MAX_MODE,
        width: 'w-80',

        'menu-item': {
            cls: ['space-x-4', 'pl-8', 'pr-2.5'],
            'text-cls': ['flex'],
        },
    };

    private _sidebarModeSingleton: SidebarModeSingleton;

    public initMode(): void {
        let newSidebarMode: SidebarModeInterface;
        let userPreferredSidebarMode: SidebarModeInterface;

        // 1. Sidebar Mode stored in local storage
        // if exists otherwise set default to MAX
        try {
            userPreferredSidebarMode = JSON.parse(
                this.localStorage.get(LocalStorageService.SIDEBAR)
            );
        } catch (ex) {
            userPreferredSidebarMode = SidebarModeService.MAX_SIDEBAR_MODE;
        }

        if (!!userPreferredSidebarMode) {
            newSidebarMode = userPreferredSidebarMode;
        }

        // 2. User Custom preference
        if (!!this._sidebarModeSingleton.sidebarMode) {
            newSidebarMode = this._sidebarModeSingleton.sidebarMode;
        }

        // Set effective sidebar
        this._sidebarModeSingleton.sidebarMode = newSidebarMode!;

        // Set sidebar mode to local storage
        this.localStorage.set(
            LocalStorageService.SIDEBAR,
            JSON.stringify(this._sidebarModeSingleton.sidebarMode)
        );
    }

    public toggleMode(): void {
        this._sidebarModeSingleton.sidebarMode =
            this._sidebarModeSingleton.sidebarMode.mode ===
            SidebarModeService.MIN_MODE
                ? SidebarModeService.MAX_SIDEBAR_MODE
                : SidebarModeService.MIN_SIDEBAR_MODE;

        // console.log(this._sidebarModeSingleton.sidebarMode);
        this.localStorage.set(
            LocalStorageService.SIDEBAR,
            JSON.stringify(this._sidebarModeSingleton.sidebarMode)
        );
    }

    // getters and setters
    public get sidebarModeSingleton(): SidebarModeSingleton {
        return this._sidebarModeSingleton;
    }
    // getters and setters
}
