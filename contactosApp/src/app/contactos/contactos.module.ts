import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from './contactos-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FormsModule } from '@angular/forms';
import { Listado3Component } from './pages/listado3/listado3.component';

@NgModule({
  declarations: [
    EditarComponent,
    VerComponent,
    ListadoComponent,
    Listado3Component,
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    FormsModule
  ]
})
export class ContactosModule { }
