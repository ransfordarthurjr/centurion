import { Component, OnDestroy, OnInit } from '@angular/core';

import { ThemeService } from 'src/app/services/theme.service';
import { SidebarModeService } from 'src/app/services/sidebar-mode.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(
        private readonly themService: ThemeService,
        private readonly sidebarModeService: SidebarModeService
    ) {}

    ngOnInit(): void {
        this.themService.initTheme();
        this.sidebarModeService.initMode();
    }

    ngOnDestroy(): void {}
}
