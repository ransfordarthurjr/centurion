import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    public static readonly THEME: string = 'theme';
    public static readonly SIDEBAR: string = 'sidebar';

    public localStorage() {
        return localStorage;
    }

    public get(name: string): any {
        return localStorage[name];
    }

    public set(name: string, value: any): void {
        localStorage[name] = value;
    }

    public unset(name: string): void {
        localStorage.removeItem(name);
    }
}
