import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItemInterface } from 'src/app/interfaces/select-item-interface';

@Component({
    selector: 'app-select-item',
    templateUrl: './select-item.component.html',
    styleUrls: ['./select-item.component.scss'],
})
export class SelectItemComponent implements OnInit {
    constructor() {}

    @Input() item!: SelectItemInterface;
    @Input() selected: boolean = false;
    @Output('emit-selected-item')
    emitSelectedItem: EventEmitter<SelectItemInterface> =
        new EventEmitter<SelectItemInterface>();

    ngOnInit(): void {}

    public setSelectedItem(): void {
        this.emitSelectedItem.emit(this.item);
    }
}
