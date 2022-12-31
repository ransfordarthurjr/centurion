import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { SelectItemInterface } from 'src/app/interfaces/select-item-interface';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
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
export class SelectComponent implements OnInit, OnDestroy {
    constructor() {}

    @Input() label: string = 'Label';
    @Input() items!: Array<SelectItemInterface>;
    @Input('initial-item') initialSelection?: SelectItemInterface;
    @Input('no-selection-text') noSelectionText: string = '-- Select Item --';
    @Output('emit-selected-item')
    emitSelectedItem: EventEmitter<SelectItemInterface> =
        new EventEmitter<SelectItemInterface>();

    // remove dropdown  from screen
    // when user hit ESC key
    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
        event: KeyboardEvent
    ) {
        // console.log(event);
        if (this._isDropdownShown) this._isDropdownShown = false;
    }

    private _isDropdownShown: boolean = false;

    private _noSelection: SelectItemInterface = {
        id: 'ba27d7e2-a7a3-4982-859a-03c3bb16f3a2',
        img: null,
        text: '',
        value: null,
    };
    private _selectedItem!: SelectItemInterface;

    ngOnInit(): void {
        // set no selection item text
        this._noSelection.text = this.noSelectionText;

        // set initial item
        // to user determined if provided
        // otherwise set to no selection
        if (!!this.initialSelection) {
            this._selectedItem = this.initialSelection;
        } else {
            this._selectedItem = this._noSelection;
        }

        // emit initially selected item;
        this.emitSelectedItem.emit(this._selectedItem);
    }

    ngOnDestroy(): void {}

    public setSelectedItem(selectedItem: SelectItemInterface): void {
        this._selectedItem = selectedItem;
        this.emitSelectedItem.emit(this._selectedItem);
    }

    public toggleDropdown(): void {
        this._isDropdownShown = !this._isDropdownShown;
    }

    // getters and setters
    public get isDropdownShown(): boolean {
        return this._isDropdownShown;
    }

    public get noSelection(): SelectItemInterface {
        return this._noSelection;
    }

    public get selectedItem(): SelectItemInterface | undefined {
        return this._selectedItem;
    }
    // getters and setters
}
