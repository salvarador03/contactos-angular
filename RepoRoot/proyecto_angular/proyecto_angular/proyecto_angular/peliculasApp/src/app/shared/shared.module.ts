import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador/contador.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';


@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent,
    FiltroBusquedaComponent
  ],  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ContadorComponent,
    FiltroBusquedaComponent,
    MenuComponent
  ]
})
export class SharedModule { }
