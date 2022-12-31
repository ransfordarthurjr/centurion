import { Component, Input } from '@angular/core';
import { ChartDataColour } from 'src/app/types/type';

@Component({
    selector: 'app-chart-legend-item',
    templateUrl: './chart-legend-item.component.html',
    styleUrls: ['./chart-legend-item.component.scss'],
})
export class ChartLegendItemComponent {
    @Input('data-colour') dataColor: ChartDataColour = 'sky';
    @Input('legend-item') legendItem: string = '';

    public cls(): string[] {
        const sky: string[] = ['text-sky-600', 'dark:text-sky-400'],
            fuchsia: string[] = ['text-fuchsia-600', 'dark:text-fuchsia-400'],
            teal: string[] = ['text-teal-600', 'dark:text-teal-400'],
            rose: string[] = ['text-rose-600', 'dark:text-rose-400'],
            indigo: string[] = ['text-indigo-600', 'dark:text-indigo-400'],
            orange: string[] = ['text-orange-600', 'dark:text-orange-400'],
            violet: string[] = ['text-violet-600', 'dark:text-violet-400'];

        switch (this.dataColor) {
            case 'sky':
                return sky;
            case 'fuchsia':
                return fuchsia;
            case 'teal':
                return teal;
            case 'rose':
                return rose;
            case 'indigo':
                return indigo;
            case 'orange':
                return orange;
            case 'violet':
                return violet;
        }
    }

    public backgroundCls(): string[] {
        const sky: string[] = ['bg-sky-600', 'dark:bg-sky-400'],
            fuchsia: string[] = ['bg-fuchsia-600', 'dark:bg-fuchsia-400'],
            teal: string[] = ['bg-teal-600', 'dark:bg-teal-400'],
            rose: string[] = ['bg-rose-600', 'dark:bg-rose-400'],
            indigo: string[] = ['bg-indigo-600', 'dark:bg-indigo-400'],
            orange: string[] = ['bg-orange-600', 'dark:bg-orange-400'],
            violet: string[] = ['bg-violet-600', 'dark:bg-violet-400'];

        switch (this.dataColor) {
            case 'sky':
                return sky;
            case 'fuchsia':
                return fuchsia;
            case 'teal':
                return teal;
            case 'rose':
                return rose;
            case 'indigo':
                return indigo;
            case 'orange':
                return orange;
            case 'violet':
                return violet;
        }
    }
}
