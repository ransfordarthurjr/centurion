import { Component, Input } from '@angular/core';
import { StatCardColourScheme } from 'src/app/types/type';

@Component({
    selector: 'app-stat-pill',
    templateUrl: './stat-pill.component.html',
    styleUrls: ['./stat-pill.component.scss'],
})
export class StatPillComponent {
    @Input('color-scheme') colorScheme: StatCardColourScheme = 'sky';
    @Input() icon!: string;
    @Input() title: string = '';
    @Input() stat: string = '';
    @Input('stat-increase') statIncrease: boolean = false;
    @Input('stat-stat-note') statFootnote: string = '';

    public cls(): string[] {
        const sky: string[] = [
                'border-sky-200/40',
                'bg-sky-100',
                'text-sky-800',

                'dark:border-sky-600',
                'dark:bg-sky-800',
                'dark:text-sky-100',
            ],
            teal: string[] = [
                'border-teal-200/40',
                'bg-teal-100',
                'text-teal-800',

                'dark:border-teal-600',
                'dark:bg-teal-800',
                'dark:text-teal-100',
            ],
            indigo: string[] = [
                'border-indigo-200/40',
                'bg-indigo-100',
                'text-indigo-800',

                'dark:border-indigo-600',
                'dark:bg-indigo-800',
                'dark:text-indigo-100',
            ],
            fuchsia: string[] = [
                'border-fuchsia-200/40',
                'bg-fuchsia-100',
                'text-fuchsia-800',

                'dark:border-fuchsia-600',
                'dark:bg-fuchsia-800',
                'dark:text-fuchsia-100',
            ];

        switch (this.colorScheme) {
            case 'indigo':
                return indigo;

            case 'fuchsia':
                return fuchsia;

            case 'sky':
                return sky;

            case 'teal':
                return teal;

            default:
                return sky;
        }
    }

    public headerIconCls(): string[] {
        const sky: string[] = [
                'border-sky-200/30',
                'dark:border-sky-600/60',
                'bg-sky-600',
                'text-sky-100',
            ],
            teal: string[] = [
                'border-teal-200/30',
                'dark:border-teal-600/60',
                'bg-teal-600',
                'text-teal-100',
            ],
            indigo: string[] = [
                'border-indigo-200/30',
                'dark:border-indigo-600/60',
                'bg-indigo-600',
                'text-indigo-100',
            ],
            fuchsia: string[] = [
                'border-fuchsia-200/30',
                'dark:border-fuchsia-600/60',
                'bg-fuchsia-600',
                'text-fuchsia-100',
            ];

        switch (this.colorScheme) {
            case 'indigo':
                return indigo;

            case 'fuchsia':
                return fuchsia;

            case 'sky':
                return sky;

            case 'teal':
                return teal;

            default:
                return sky;
        }
    }

    public bodyCls(): string[] {
        const sky: string[] = [
                'border-indigo-200/60',
                'dark:border-sky-600/40',
            ],
            teal: string[] = ['border-teal-200/60', 'dark:border-teal-600/40'],
            indigo: string[] = [
                'border-indigo-200/60',
                'dark:border-indigo-600/40',
            ],
            fuchsia: string[] = [
                'border-fuchsia-200/60',
                'dark:border-fuchsia-600/40',
            ];

        switch (this.colorScheme) {
            case 'indigo':
                return indigo;

            case 'fuchsia':
                return fuchsia;

            case 'sky':
                return sky;

            case 'teal':
                return teal;

            default:
                return sky;
        }
    }
}
