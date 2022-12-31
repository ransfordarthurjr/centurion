import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MemberInterface } from 'src/app/interfaces/data/member-interface';
import { Booleany } from 'src/app/types/type';

@Component({
    selector: 'app-member-list-item',
    templateUrl: './member-list-item.component.html',
    styleUrls: ['./member-list-item.component.scss'],
})
export class MemberListItemComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        this.initIcon();
    }

    @Input() member!: MemberInterface;
    @Input('is-selected') isSelected: boolean = false;
    @Input('is-leader') isLeader: boolean = false;
    @Output('emit-member') emitMember: EventEmitter<MemberInterface> =
        new EventEmitter<MemberInterface>();

    private readonly Truthy: Booleany = 'truthy';
    // private readonly Falsey: Booleany = 'falsey';
    private _cls!: string[];
    private _icon!: string;
    private _iconCls!: string[];

    private initIcon(): void {
        if (this.member.corporate === this.Truthy) {
            this._icon = 'corporate_fare';
        } else {
            this._icon =
                this.member.genders.name === 'Female' ? 'face_4' : 'face_6';
        }

        switch (this.member.membership_statuses.name) {
            case 'Adherent':
                this._iconCls = ['text-orange-600', 'dark:text-orange-400'];
                break;

            case 'Catechumen':
                this._iconCls = ['text-teal-600', 'dark:text-teal-400'];
                break;

            case 'Junior Member	':
                this._iconCls = ['text-blue-600', 'dark:text-blue-400'];
                break;

            case 'Full Member':
                this._iconCls = ['text-violet-600', 'dark:text-violet-400'];
                break;
        }
    }

    public clicked(): void {
        // this._cls = ['ring-2', 'ring-slate-400', 'dark:ring-slate-400'];
        this.emitMember.emit(this.member);
    }

    // classifiers
    public membershipStatusCls(): string[] {
        switch (this.member.membership_statuses.name) {
            case 'Adherent':
                return [
                    'bg-orange-100/80',
                    'text-orange-900',
                    'dark:bg-orange-900/80',
                    'dark:text-orange-400',
                ];

            case 'Catechumen':
                return [
                    'bg-teal-100/80',
                    'text-teal-900',
                    'dark:bg-teal-900/80',
                    'dark:text-teal-400',
                ];

            case 'Junior Member':
                return [
                    'bg-blue-100/80',
                    'text-blue-900',
                    'dark:bg-blue-900/80',
                    'dark:text-blue-400',
                ];

            case 'Full Member':
                return [
                    'bg-violet-100/80',
                    'text-violet-900',
                    'dark:bg-violet-900/80',
                    'dark:text-violet-400',
                ];
            default:
                return [];
        }
    }
    public membershipStatusDotCls(): string[] {
        switch (this.member.membership_statuses.name) {
            case 'Adherent':
                return ['bg-orange-500'];

            case 'Catechumen':
                return ['bg-teal-500'];

            case 'Junior Member':
                return ['bg-blue-500'];

            case 'Full Member':
                return ['bg-violet-500'];
            default:
                return [];
        }
    }
    // classifiers

    // getters and setters
    public get cls(): string[] {
        return this._cls;
    }

    public get icon(): string {
        return this._icon;
    }

    public get iconCls(): string[] {
        return this._iconCls;
    }
    // end getters and setters
}
