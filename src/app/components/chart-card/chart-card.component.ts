import * as Highcharts from 'highcharts';

import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss'
})
export class ChartCardComponent {
  public miGrafica: typeof Highcharts = Highcharts;
  public configuracionGrafica: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    series: [
      {
        type: 'line',
        data: [12,20,50,1]
      }
    ]
  }
}
