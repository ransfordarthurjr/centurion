import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/types/type';

@Component({
    selector: 'app-theme-switcher',
    templateUrl: './theme-switcher.component.html',
    styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
    constructor(private readonly themeService: ThemeService) {}

    @Output('emit-theme') emitTheme: EventEmitter<Theme> =
        new EventEmitter<Theme>();

    private _theme!: Theme;
    private _theme$!: Subscription;

    ngOnInit(): void {
        this.setupTheme();
    }

    ngOnDestroy(): void {
        this.closeSubscriptions();
    }

    private closeSubscriptions(): void {
        if (this._theme$) {
            this._theme$.unsubscribe();
        }
    }

    private setupTheme(): void {
        // get the current sidebar mode
        this._theme = this.themeService.themeSingleton.theme;
        this.emitTheme.emit(this._theme);

        // subscribe to further changes
        this._theme$ = this.themeService.themeSingleton.theme$.subscribe({
            next: (theme: Theme) => {
                this._theme = theme;
            },
        });
    }

    public toggleTheme(): void {
        // toggle theme
        this.themeService.toggleTheme();
        this.emitTheme.emit(this._theme);
    }

    public switcherCls(): string[] {
        const cls: string[] =
            this._theme === 'light'
                ? ['border-amber-600/20', 'bg-amber-200']
                : ['border-slate-200/20', 'bg-slate-600'];

        return cls;
    }

    public switcherSvgCls(): string[] {
        const cls: string[] =
            this._theme === 'light' ? ['translate-x-0'] : ['translate-x-4'];

        return cls;
    }

    // getters and setters
    public get theme(): Theme {
        return this._theme;
    }
    // end getters and setters
}
