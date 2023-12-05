import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import * as CanvasJSAngularChart from '../../lib/canvasjs.angular.component';
import { EstadisticasNombreComponent } from './components/estadisticas-nombre/estadisticas-nombre.component';
import { ContactosModule } from '../contactos/contactos.module';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    CanvasJSChart,
    DashboardComponent,
    EstadisticasNombreComponent
  ],
  imports: [
    CommonModule,
    ContactosModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
