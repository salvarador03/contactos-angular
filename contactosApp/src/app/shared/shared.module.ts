import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador/contador.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';



@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent,
    BusquedasComponent,
    FiltroBusquedaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ContadorComponent,
    MenuComponent
  ]
})
export class SharedModule { }
