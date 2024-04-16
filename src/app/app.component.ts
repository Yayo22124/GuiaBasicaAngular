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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public miNombre: string = 'Eli Haziel Ortiz Ramírez';
}
