import {
    AfterContentInit,
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { ButtonRadioInterface } from 'src/app/interfaces/button-radio-interface';

@Component({
    selector: 'app-button-radio-group',
    templateUrl: './button-radio-group.component.html',
    styleUrls: ['./button-radio-group.component.scss'],
})
export class ButtonRadioGroupComponent
    implements OnInit, OnDestroy, AfterViewInit
{
    constructor() {}

    @Input('buttons') buttons!: Array<ButtonRadioInterface>;
    @Output('emit-button-radio')
    emitButtonRadio: EventEmitter<ButtonRadioInterface> =
        new EventEmitter<ButtonRadioInterface>();

    private _activeButton!: ButtonRadioInterface;

    ngOnInit(): void {
        this.initActiveButton();
    }

    ngOnDestroy(): void {}

    ngAfterViewInit(): void {
        // this.activateButton(this._activeButton);
    }

    private initActiveButton(): void {
        this._activeButton = this.buttons[0];
    }

    public activateButton(button: ButtonRadioInterface): void {
        // reset all buttons and  set active button
        this.buttons.forEach((btn) => {
            btn.active = btn.action === button.action;

            if (btn.active) {
                this._activeButton = btn;
            }
        });

        // emit the active button
        this.emitButtonRadio.emit(this._activeButton);
    }

    // classifiers
    public buttonCls(button: ButtonRadioInterface): string[] {
        const buttonCls: string[] = [
                'border-transparent',
                'hover:border-sky-300/40',
                'dark:hover:border-sky-600/40',
            ],
            activeButtonCls: string[] = [
                'border-sky-300',
                'dark:border-sky-600/40',
                'bg-white',
                'dark:bg-sky-700',
                'text-sky-500',
                'dark:text-sky-200',
                'shadow',
            ];

        if (!this._activeButton) {
            return buttonCls;
        }

        return button.action === this._activeButton.action
            ? activeButtonCls
            : buttonCls;
    }
    // end classifiers

    // getters and setters
    public get activeButton(): ButtonRadioInterface {
        return this._activeButton;
    }
    // end getters and setters
}
