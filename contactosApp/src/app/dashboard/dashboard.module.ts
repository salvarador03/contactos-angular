import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CanvasJSAngularChart from '../../lib/canvasjs.angular.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstadisticasNombreComponent } from './components/estadisticas-nombre/estadisticas-nombre.component'
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    CanvasJSChart,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
