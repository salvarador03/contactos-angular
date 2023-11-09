import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador/contador.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';



@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent,
    BusquedasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent,
    MenuComponent
  ]
})
export class SharedModule { }
