import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { FiltroBusquedaComponent } from '../shared/components/filtro-busqueda/filtro-busqueda.component';


@NgModule({
  declarations: [
  
    FiltroBusquedaComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
