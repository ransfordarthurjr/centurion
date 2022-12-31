import { ElementRef, QueryList } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartColorInterface } from '../interfaces/chart-color-interface';

export class ChartsUtils {
    public static readonly COLORS = {
        transparent: 'rgba(248,250,252, 0.0)',
        sky: {
            color: 'sky',
            normal: 'rgba(2,132,199, 1.0)', //sky-600: #0284C7
            light: 'rgba(2,132,199, 0.5)', //sky-600: #0284C7
            lighter: 'rgba(2,132,199, 0.3)', //sky-600: #0284C7
            lightest: 'rgba(2,132,199, 0.1)', //sky-600: #0284C7
        },
        orange: {
            normal: 'rgba(234,88,12, 1.0)', //teal-600: ##ea580c
            light: 'rgba(234,88,12, 0.5)', //teal-600: ##ea580c
            lighter: 'rgba(234,88,12, 0.3)', //teal-600: ##ea580c
            lightest: 'rgba(234,88,12, 0.1)', //teal-600: ##ea580c
        },
        teal: {
            normal: 'rgba(13,148,136, 1.0)', //teal-600: ##0d9488
            light: 'rgba(13,148,136, 0.5)', //teal-600: ##0d9488
            lighter: 'rgba(13,148,136, 0.3)', //teal-600: ##0d9488
            lightest: 'rgba(13,148,136, 0.1)', //teal-600: ##0d9488
        },
        indigo: {
            normal: 'rgba(79,70,229, 1.0)', //indigo-600: ##4f46e5
            light: 'rgba(79,70,229, 0.5)', //indigo-600: ##4f46e5
            lighter: 'rgba(79,70,229, 0.3)', //indigo-600: ##4f46e5
            lightest: 'rgba(79,70,229, 0.1)', //indigo-600: ##4f46e5
        },
        violet: {
            normal: 'rgba(139,92,246, 1.0)', //sky-600: ##8b5cf6
            light: 'rgba(139,92,246, 0.5)', //sky-600: ##8b5cf6
            lighter: 'rgba(139,92,246, 0.3)', //sky-600: ##8b5cf6
            lightest: 'rgba(139,92,246, 0.1)', //sky-600: ##8b5cf6
        },
        fuchsia: {
            normal: 'rgba(192,38,211, 1.0)', //fuchsia-600: ##c026d3
            light: 'rgba(192,38,211, 0.5)', //fuchsia-600: ##c026d3
            lighter: 'rgba(192,38,211, 0.3)', //fuchsia-600: ##c026d3
            lightest: 'rgba(192,38,211, 0.1)', //fuchsia-600: ##c026d3
        },
        rose: {
            normal: 'rgba(225,29,72, 1.0)', //rose-600: ##E11D48
            light: 'rgba(225,29,72, 0.5)', //rose-600: ##E11D48
            lighter: 'rgba(225,29,72, 0.3)', //rose-600: ##E11D48
            lightest: 'rgba(225,29,72, 0.1)', //rose-600: ##E11D48
        },
    };

    public static readonly COLOR_PALETTE = [
        ChartsUtils.COLORS.sky,
        ChartsUtils.COLORS.fuchsia,
        ChartsUtils.COLORS.teal,
        ChartsUtils.COLORS.rose,
        ChartsUtils.COLORS.indigo,
        ChartsUtils.COLORS.orange,
        ChartsUtils.COLORS.violet,
    ];

    public static readonly LineChart: ChartType = 'line';
    public static readonly LineChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        elements: {
            line: {
                tension: 0.5,
            },
        },
        scales: {
            x: {
                border: {
                    color: ChartsUtils.COLORS.sky.lighter,
                    width: 3,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    color: ChartsUtils.COLORS.sky.normal,
                },
            },
            y: {
                border: {
                    color: ChartsUtils.COLORS.sky.lighter,
                    dash: [8, 4],
                    width: 3,
                },
                grid: {
                    display: true,
                    lineWidth: 2,
                    color: ChartsUtils.COLORS.sky.lightest,
                    tickColor: ChartsUtils.COLORS.sky.lightest,
                },
                ticks: {
                    color: ChartsUtils.COLORS.sky.normal,
                },
            },
        },
        plugins: {
            legend: { display: false },
        },
    };

    public static GetChartById(
        id: string,
        charts: QueryList<BaseChartDirective>
    ): BaseChartDirective | undefined {
        return charts.find((chart) => chart.chart?.canvas.id === id);
    }

    public static InitLineChartData(lines: number): ChartConfiguration['data'] {
        const lineChartData: ChartConfiguration['data'] = {
            labels: [],
            datasets: [],
        };

        for (let l = 0; l < lines; l++) {
            lineChartData.datasets.push({
                data: [],
                borderWidth: 1,
                // borderColor: ChartsUtils.COLOR_PALETTE[l].normal,
                // backgroundColor: ChartsUtils.COLOR_PALETTE[l].lightest,
                pointBorderColor: ChartsUtils.COLOR_PALETTE[l].normal,
                pointBackgroundColor: ChartsUtils.COLOR_PALETTE[l].normal,
                pointHoverBorderColor: ChartsUtils.COLOR_PALETTE[l].normal,
                pointHoverBackgroundColor: ChartsUtils.COLOR_PALETTE[l].normal,
                fill: true,
            });
        }

        return lineChartData;
    }

    public static SetupLineChartGradients(
        canvas: ElementRef<HTMLCanvasElement>,
        chart: BaseChartDirective
    ): void {
        // chart.options!.responsive = false;
        // chart.options!.maintainAspectRatio = false;
        // chart.options!.scales.y.border.display = false;

        const context: CanvasRenderingContext2D | null =
            canvas.nativeElement.getContext('2d');

        // border stroke gradient
        let borderGradient: CanvasGradient | undefined;
        for (let d = 0; d < chart.data!.datasets.length; d++) {
            borderGradient = context?.createLinearGradient(
                0,
                chart.chart!.chartArea.bottom,
                0,
                chart.chart!.chartArea.top
            );
            borderGradient!.addColorStop(
                0,
                ChartsUtils.COLOR_PALETTE[d].normal
            );
            borderGradient!.addColorStop(
                1,
                ChartsUtils.COLOR_PALETTE[d].normal
            );
            chart.data!.datasets[d].borderColor = borderGradient;
            chart.data!.datasets[d].hoverBorderColor = borderGradient;
        }

        // background gradient
        let backgroundGradient: CanvasGradient | undefined;
        for (let d = 0; d < chart.data!.datasets.length; d++) {
            backgroundGradient = context?.createLinearGradient(
                0,
                chart.chart!.chartArea.bottom,
                0,
                chart.chart!.chartArea.top
            );

            backgroundGradient!.addColorStop(
                0.0,
                ChartsUtils.COLORS.transparent
            );
            backgroundGradient!.addColorStop(
                0.8,
                ChartsUtils.COLOR_PALETTE[d].lightest
            );
            backgroundGradient!.addColorStop(
                1.0,
                ChartsUtils.COLOR_PALETTE[d].normal
            );
            chart.data!.datasets[d].backgroundColor = backgroundGradient;
            chart.data!.datasets[d].hoverBackgroundColor = backgroundGradient;
        }
    }
}
