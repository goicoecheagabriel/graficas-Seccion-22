import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Primeros', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Segundos', backgroundColor: '#F763CA', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Terceros', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
  ];

  constructor() {
    this.randomize()
  }

  ngOnInit(): void {
  }

  public randomize(): void {
    for (let i = 0; i < this.barChartData.length; i++) {
      this.barChartData[i].data = [
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 )
      ]
    }

}

}
