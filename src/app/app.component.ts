import * as Highcharts from 'highcharts';

import { Component, OnInit, inject } from '@angular/core';
import { Record, iApiResponse } from './core/interfaces/apiResponse.interface';

import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoadDataService } from './core/services/load-data.service';
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
    HighchartsChartModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private loadDataService = inject(LoadDataService);

  public miNombre: string = 'Eli Haziel Ortiz Ramírez';

  public miGrafica: typeof Highcharts = Highcharts;
  public configuracionGrafica!: Highcharts.Options;

  public registros: Record[] = [];

  ngOnInit(): void {
    this.loadDataService.getTemperatureData().subscribe((res: iApiResponse) => {
      console.log(res);

      this.registros = res.records;
      this.getTemperatureChart();
    });
  }

  private getTemperatureChart() {
    const registrosFormateados = this.registros.map((registro) => ({
      ...registro,
      fechaFormateada: Highcharts.dateFormat(
        '%d/%m %H:%m',
        Date.parse(registro.registeredDate)
      ),
    }));
    return (this.configuracionGrafica = {
      title: {
        text: 'Registros Carballito',
      },
      chart: {
        scrollablePlotArea: {
          minWidth: 500,
          scrollPositionX: 1,
        },
      },
      scrollbar: {
        enabled: true,
      },
      time: {
        timezone: 'America/Mexico_City',
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Fecha y Hora',
        },
        // categories: registrosFormateados.map(
        //   (registroFormateado) => registroFormateado.fechaFormateada
        // ),
        categories: registrosFormateados.map(
          (registroFormateado) => registroFormateado.fechaFormateada
        ),
      },
      yAxis: {
        title: {
          text: 'Temperatura y Humedad'
        },
      },
      plotOptions: {
        series: {
          turboThreshold: 600,
        },
      },
      series: [
        {
          type: 'line',
          name: 'Temperatura',
          tooltip: {
            valueSuffix: ' °C',
          },
          data: this.registros.map((registro, index) => {
            return {
              y: registro.readings[0].value,
              name: 'Detección de Temperatura',
            };
          }),
        },
        {
          type: 'line',
          name: 'Humedad',
          tooltip: {
            valueSuffix: ' %',
          },
          data: this.registros.map((registro, index) => {
            return {
              y: registro.readings[1].value,
              name: 'Detección de Humedad',
            };
          }),
        },
      ],
    });
  }
}
