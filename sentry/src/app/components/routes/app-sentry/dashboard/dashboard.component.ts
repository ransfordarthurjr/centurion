import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { DateTime } from 'luxon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartsUtils } from 'src/app/utils/charts-utils';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    host: {
        class: 'sentry-app-route-component',
    },
})
export class DashboardComponent implements OnInit, AfterViewInit {
    constructor() {}

    @ViewChild('paymentsCanvas')
    private _paymentsCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('attendancesCanvas')
    private _attendancesCanvas!: ElementRef<HTMLCanvasElement>;

    // @ViewChild(BaseChartDirective, { static: true }) chart?: BaseChartDirective;
    @ViewChildren(BaseChartDirective) charts!: QueryList<BaseChartDirective>;

    private _timestamp!: DateTime;

    private _lineChart: ChartType = ChartsUtils.LineChart;
    private _lineChartOptions: ChartConfiguration['options'] =
        ChartsUtils.LineChartOptions;

    private _paymentsChartData!: ChartConfiguration['data'];
    private _attendancesChartData!: ChartConfiguration['data'];

    ngOnInit(): void {
        this.initTimestamp();
        this.initCharts();
    }

    ngAfterViewInit(): void {
        this.setupChartGradients();

        setTimeout(() => {
            const paymentsChart = ChartsUtils.GetChartById(
                'payments-chart',
                this.charts
            )!;

            paymentsChart.data!.labels = this.PlaceholderLabels;
            paymentsChart.data!.datasets[0].data = this.PlaceholderDataTithes;
            paymentsChart.data!.datasets[1].data = this.PlaceholderDataOffering;
            paymentsChart.update();

            const attendancesChart = ChartsUtils.GetChartById(
                'attendances-chart',
                this.charts
            )!;
            attendancesChart.data!.labels = this.PlaceholderLabels;
            attendancesChart.data!.datasets[0].data = this.PlaceholderDataAdult;
            attendancesChart.data!.datasets[1].data =
                this.PlaceholderDataChildren;
            attendancesChart.update();
        }, 5 * 1000);
    }

    private initTimestamp(): void {
        this._timestamp = DateTime.now();
    }

    private initCharts(): void {
        // 1. offering 2. tithes
        const numberOfPayments: number = 2;
        this._paymentsChartData =
            ChartsUtils.InitLineChartData(numberOfPayments);

        // 1. adult 2. children attendances
        const numberOfAttendances: number = 2;
        this._attendancesChartData =
            ChartsUtils.InitLineChartData(numberOfAttendances);
    }

    private setupChartGradients(): void {
        const paymentsChart = ChartsUtils.GetChartById(
            'payments-chart',
            this.charts
        )!;
        const attendancesChart = ChartsUtils.GetChartById(
            'attendances-chart',
            this.charts
        )!;

        ChartsUtils.SetupLineChartGradients(
            this._paymentsCanvas!,
            paymentsChart
        );

        ChartsUtils.SetupLineChartGradients(
            this._attendancesCanvas!,
            attendancesChart
        );
    }

    // getters and setters
    public get timestamp(): DateTime {
        return this._timestamp;
    }

    public get lineChart(): ChartType {
        return this._lineChart;
    }

    public get lineChartOptions(): ChartConfiguration['options'] {
        return this._lineChartOptions;
    }

    public get paymentsChartData(): ChartConfiguration['data'] {
        return this._paymentsChartData;
    }

    public get attendancesChartData(): ChartConfiguration['data'] {
        return this._attendancesChartData;
    }
    // end getters and setters

    private readonly PlaceholderLabels = [
        '3rd',
        '10th',
        '17th',
        '24th',
        '31st',
        '7th',
        '14th',
        '21st',
        '28th',
        '4th',
        '11th',
        '18th',
        '25th',
    ];
    private readonly PlaceholderDataTithes = [
        3895.0, 942.0, 3700.0, 5613.0, 4492.0, 2462.0, 900.0, 4143.0, 4555.0,
        3015.0, 1870.0, 5165.0, 2705.0,
    ];
    private readonly PlaceholderDataOffering = [
        590.0, 942.0, 300.4, 407.0, 625.5, 556.9, 400.0, 669.8, 531.8, 754.1,
        870.6, 516.7, 500.3,
    ];

    private readonly PlaceholderDataAdult = [
        105, 142, 170, 203, 192, 162, 190, 143, 155, 215, 187, 165, 105,
    ];
    private readonly PlaceholderDataChildren = [
        76, 54, 64, 70, 45, 68, 70, 62, 55, 63, 68, 64, 50,
    ];
}
