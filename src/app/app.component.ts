import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MiPrimerComponenteComponent } from './components/mi-primer-componente/mi-primer-componente.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MiPrimerComponenteComponent,
    SidebarComponent,
    HeaderComponent,
    ChartCardComponent,
    HighchartsChartModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public miNombre: string = 'Eli Haziel Ortiz Ramírez';

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
