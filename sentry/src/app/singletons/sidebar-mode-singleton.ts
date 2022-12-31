import { Subject } from 'rxjs';
import { SidebarModeInterface } from '../interfaces/sidebar-mode-interface';

export class SidebarModeSingleton {
    private constructor() {}

    private static instance: SidebarModeSingleton;

    private _sidebarMode!: SidebarModeInterface;
    private _sidebarMode$!: Subject<SidebarModeInterface>;

    public static getInstance(): SidebarModeSingleton {
        if (!SidebarModeSingleton.instance) {
            SidebarModeSingleton.instance = new SidebarModeSingleton();

            SidebarModeSingleton.instance._sidebarMode$ =
                new Subject<SidebarModeInterface>();
        }

        return SidebarModeSingleton.instance;
    }

    public get sidebarMode(): SidebarModeInterface {
        return this._sidebarMode;
    }

    public set sidebarMode(sidebarMode: SidebarModeInterface) {
        this._sidebarMode = sidebarMode;
        this._sidebarMode$.next(this._sidebarMode);
    }

    public get sidebarMode$(): Subject<SidebarModeInterface> {
        return this._sidebarMode$;
    }

    /*
    public set sidebarMode$(sidebarMode$: Subject<SidebarMode>) {
        this._sidebarMode$ = sidebarMode$;
    }
    */
}
