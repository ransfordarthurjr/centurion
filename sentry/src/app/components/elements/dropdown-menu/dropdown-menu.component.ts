import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, Input } from '@angular/core';
import { DropdownMenuInterface } from 'src/app/interfaces/dropdown-menu-interface';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss'],
    animations: [
        trigger('animateinout', [
            transition(':enter', [
                style({ opacity: 0 }), //apply default styles before animation starts
                animate('300ms ease-in-out', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1 }), //apply default styles before animation starts
                animate('300ms ease-in-out', style({ opacity: 0 })),
            ]),
        ]),
    ],
})
export class DropdownMenuComponent {
    constructor() {}

    @Input('menu') menu!: DropdownMenuInterface;

    @Input() shown: boolean = false;

    // remove menu from screen
    // when user hit ESC key
    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
        event: KeyboardEvent
    ) {
        // console.log(event);
        if (this.shown) this.shown = false;
    }
}
