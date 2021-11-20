import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors:Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

  constructor( private graficaService:GraficasService ) { }

  ngOnInit(): void {

   /*  this.graficaService.getUsuariosRedesSociales()
      .subscribe( data => {
        console.log(data);
        const labels = Object.keys( data );
        const values = Object.values( data );
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
        console.log(labels);
        console.log(values);
      } ) */

      this.graficaService.getUsuariosRedesSocialesDonaData()
        .subscribe( ({labels, values}) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push( values );
        } )

  }



}
