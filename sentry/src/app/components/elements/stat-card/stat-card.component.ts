import { Component, Input } from '@angular/core';
import { StatCardColourScheme } from 'src/app/types/type';

@Component({
    selector: 'app-stat-card',
    templateUrl: './stat-card.component.html',
    styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
    @Input('color-scheme') colorScheme: StatCardColourScheme = 'sky';
    @Input() icon!: string;
    @Input() title: string = '';
    @Input() text: string = '';

    public cls(): string[] {
        const sky: string[] = [
                'bg-sky-100',
                'dark:bg-sky-600',
                'text-sky-800',
                'dark:text-sky-50',
            ],
            teal: string[] = [
                'bg-teal-100',
                'dark:bg-teal-600',
                'text-teal-800',
                'dark:text-teal-50',
            ],
            indigo: string[] = [
                'bg-indigo-100',
                'dark:bg-indigo-600',
                'text-indigo-800',
                'dark:text-indigo-50',
            ],
            fuchsia: string[] = [
                'bg-fuchsia-100',
                'dark:bg-fuchsia-600',
                'text-fuchsia-800',
                'dark:text-fuchsia-50',
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
        const indigo: string[] = [
                'bg-indigo-600',
                'dark:bg-indigo-800',
                'text-indigo-200',
            ],
            fuchsia: string[] = [
                'bg-fuchsia-600',
                'dark:bg-fuchsia-800',
                'text-fuchsia-200',
            ],
            sky: string[] = ['bg-sky-600', 'dark:bg-sky-800', 'text-sky-200'],
            teal: string[] = [
                'bg-teal-600',
                'dark:bg-teal-800',
                'text-teal-200',
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
