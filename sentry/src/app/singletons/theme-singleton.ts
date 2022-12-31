import { Subject } from 'rxjs';
import { Theme } from 'src/app/types/type';

export class ThemeSingleton {
    private constructor() {}

    private static instance: ThemeSingleton;

    private _theme!: Theme;
    private _theme$!: Subject<Theme>;

    public static getInstance(): ThemeSingleton {
        if (!ThemeSingleton.instance) {
            ThemeSingleton.instance = new ThemeSingleton();

            ThemeSingleton.instance._theme$ = new Subject<Theme>();
        }

        return ThemeSingleton.instance;
    }

    public get theme(): Theme {
        return this._theme;
    }

    public set theme(theme: Theme) {
        this._theme = theme;
        this._theme$.next(this._theme);
    }

    public get theme$(): Subject<Theme> {
        return this._theme$;
    }

    /*
    public set theme$(theme$: Subject<Theme>) {
        this._theme$ = theme$;
    }
    */
}
