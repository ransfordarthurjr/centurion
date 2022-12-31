import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SidebarModeInterface } from 'src/app/interfaces/sidebar-mode-interface';

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
    constructor() {}

    @Input() id!: string;
    @Input() route!: string;
    @Input() icon!: string;
    @Input() text!: string;
    @Input() active: boolean = false;
    @Output('emit-sidebar') emitSidebar: EventEmitter<string> =
        new EventEmitter<string>();
    @Input('sidebar-mode') sidebarMode!: SidebarModeInterface;

    public navigate(): void {
        this.emitSidebar.emit(this.id);
    }

    // classifiers
    public cls(): string[] {
        return this.sidebarMode['menu-item'].cls.concat(
            this.active ? ['text-sky-800', 'dark:text-sky-400'] : []
        );
    }

    public iconCls(): string[] {
        const activeCls: string[] = ['font-light'],
            notActiveCls: string[] = ['font-extralight'];
        return this.active ? activeCls : notActiveCls;
    }

    public textCls(): string[] {
        return this.sidebarMode['menu-item']['text-cls'].concat(
            this.active ? ['font-semibold'] : ['font-normal']
        );
    }

    public activeBarCls(): string[] {
        const activeCls: string[] = ['visible'],
            notActiveCls: string[] = ['invisible'];
        return this.active ? activeCls : notActiveCls;
    }
    // end classifiers
}
