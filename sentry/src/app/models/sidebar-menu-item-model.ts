import { v4 as uuidv4 } from 'uuid';

export class SidebarMenuItemModel {
    constructor(route: string, icon: string, text: string) {
        this._id = `sidebar-menu-item-id-${uuidv4()}`;
        this._route = route;
        this._icon = icon;
        this._text = text;
        this._active = false;
    }

    private _id: string;
    private _route: string;
    private _icon: string;
    private _text: string;
    private _active: boolean;

    public get active(): boolean {
        return this._active;
    }

    public set active(active: boolean) {
        this._active = active;
    }

    public get text(): string {
        return this._text;
    }

    public set text(text: string) {
        this._text = text;
    }

    public get icon(): string {
        return this._icon;
    }

    public set icon(icon: string) {
        this._icon = icon;
    }

    public get route(): string {
        return this._route;
    }

    public set route(route: string) {
        this._route = route;
    }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }
}
