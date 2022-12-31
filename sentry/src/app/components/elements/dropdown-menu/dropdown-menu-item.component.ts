import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu-item',
    templateUrl: './dropdown-menu-item.component.html',
    styleUrls: ['./dropdown-menu-item.component.scss'],
})
export class DropdownMenuItemComponent {
    constructor() {}

    @Input('menu-id') menuId!: string;
    @Input() index!: number;
    @Input() icon?: string;
    @Input() text!: string;
}
