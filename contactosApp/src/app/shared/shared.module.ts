import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador/contador.component';
<<<<<<< HEAD
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';
=======
import { MenuComponent } from './menu/menu/menu.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';

>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8


@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent,
<<<<<<< HEAD
    FiltroBusquedaComponent
  ],  
=======
    BusquedasComponent,
    FiltroBusquedaComponent
  ],
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8
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
