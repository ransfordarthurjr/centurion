import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { LocalStorageService } from './local-storage.service';

import { ThemeSingleton } from '../singletons/theme-singleton';
import { Theme } from '../types/type';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly rendererFactory: RendererFactory2,
        private readonly localStorage: LocalStorageService
    ) {
        this._renderer = this.rendererFactory.createRenderer(null, null);
        this._themeSingleton = ThemeSingleton.getInstance();
    }

    public static readonly LIGHT_MODE: Theme = 'light';
    public static readonly DARK_MODE: Theme = 'dark';

    private _renderer: Renderer2;
    private _themeSingleton: ThemeSingleton;

    public initTheme(): void {
        let newTheme: Theme;
        let userPreferredTheme: Theme | null;

        const isOsThemeDarkPreferred = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        try {
            // const isUserPreferredThemeSet = LocalStorageService.THEME in this.localStorage.localStorage();
            userPreferredTheme = JSON.parse(
                this.localStorage.get(LocalStorageService.THEME)
            );
        } catch (e) {
            userPreferredTheme = null;
        }

        // 1. OS preference
        newTheme = isOsThemeDarkPreferred
            ? ThemeService.DARK_MODE
            : ThemeService.LIGHT_MODE;

        // 2. If User preference is set overried
        if (!!userPreferredTheme) {
            newTheme = userPreferredTheme;
        }

        // 3. If Incoming User Custom preference is set override
        if (!!this._themeSingleton.theme) {
            newTheme = this._themeSingleton.theme;
        }

        // Set effective sidebar
        this._themeSingleton.theme = newTheme;

        // Set sidebar mode to local storage
        this.localStorage.set(
            LocalStorageService.THEME,
            JSON.stringify(this._themeSingleton.theme)
        );

        this.markupTheme();
    }

    public toggleTheme(): void {
        this._themeSingleton.theme =
            this._themeSingleton.theme === ThemeService.LIGHT_MODE
                ? ThemeService.DARK_MODE
                : ThemeService.LIGHT_MODE;

        // console.log(this._themeSingleton.theme);
        this.localStorage.set(
            LocalStorageService.THEME,
            JSON.stringify(this._themeSingleton.theme)
        );

        this.markupTheme();
    }

    private markupTheme() {
        // remove previous theme class
        this._renderer.removeClass(
            this.document.body.parentElement,
            ThemeService.LIGHT_MODE
        );
        this._renderer.removeClass(
            this.document.body.parentElement,
            ThemeService.DARK_MODE
        );

        // set new theme class
        this._renderer.addClass(
            this.document.body.parentElement,
            this._themeSingleton.theme
        );
    }

    // getters and setters
    public get themeSingleton(): ThemeSingleton {
        return this._themeSingleton;
    }
    // getters and setters
}
