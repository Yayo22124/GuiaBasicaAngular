import * as Highcharts from 'highcharts';

import { Component, OnInit, inject } from '@angular/core';

import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoadDataService } from './core/services/load-data.service';
import { MiPrimerComponenteComponent } from './components/mi-primer-componente/mi-primer-componente.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { iApiResponse } from './core/interfaces/apiResponse.interface';

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
export class AppComponent implements OnInit {
  private loadDataService = inject(LoadDataService)

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

  ngOnInit(): void {
    this.loadDataService.getTemperatureData().subscribe(
      (res: iApiResponse) => {
        console.log(res);
      }
    )
  }
}
