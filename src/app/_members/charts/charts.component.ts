import { Component, OnInit } from '@angular/core';
import {
  HighchartService,
  ChartModal,
} from '../../_services/highchart.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {

  constructor(private highchartservice: HighchartService) {}
  title = 'Firestore-Angular-Highcharts';
  items$: ChartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;

  linechart = {
    series: [
      {
        data: [1, 2, 3],
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'linechart',
    },
  };
  barchart = {
    series: [
      {
        data: [1, 2, 3],
      },
    ],
    chart: {
      type: 'bar',
    },
    title: {
      text: 'barchart',
    },
  };
  ngOnInit() {
    this.highchartservice.rates$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.rate);
        });
        this.getChart();
      }
    });
  }
  getChart() {
    this.chartOptions = {
      series: [
        {
          data: this.chardata,
        },
      ],
      chart: {
        type: 'bar',
      },
      title: {
        text: 'barchart',
      },
    };
  }
}
