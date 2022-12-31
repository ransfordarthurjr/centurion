import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SidebarModeInterface } from 'src/app/interfaces/sidebar-mode-interface';
import { SidebarModeService } from 'src/app/services/sidebar-mode.service';

@Component({
    selector: 'app-header-logo',
    templateUrl: './header-logo.component.html',
    styleUrls: ['./header-logo.component.scss'],
})
export class HeaderLogoComponent implements OnInit, OnDestroy {
    constructor(private readonly sidebarModeService: SidebarModeService) {}

    private _sidebarMode!: SidebarModeInterface;
    private _sidebarMode$!: Subscription;

    ngOnInit(): void {
        // setups
        this.setupSidebarMode();
    }

    ngOnDestroy(): void {
        this.closeSubscriptions();
    }

    public closeSubscriptions(): void {
        if (this._sidebarMode$) {
            this._sidebarMode$.unsubscribe();
        }
    }

    public setupSidebarMode() {
        // get the current sidebar mode
        this._sidebarMode =
            this.sidebarModeService.sidebarModeSingleton.sidebarMode;

        // subscribe to further changes
        this._sidebarMode$ =
            this.sidebarModeService.sidebarModeSingleton.sidebarMode$.subscribe(
                {
                    next: (sidebarMode: SidebarModeInterface) => {
                        this._sidebarMode = sidebarMode;
                    },
                }
            );
    }

    public toggleSidebarMode(): void {
        this.sidebarModeService.toggleMode();
    }

    // classifiers
    cls(): string[] {
        return this._sidebarMode['menu-item'].cls;
    }

    textCls(): string[] {
        return this._sidebarMode['menu-item']['text-cls'];
    }

    public sidebarModeCls(): string[] {
        return [this._sidebarMode.width].concat(
            this._sidebarMode['menu-item'].cls
        );
    }
    // end classifiers

    // getters and setters
    // end getters and setters
}
