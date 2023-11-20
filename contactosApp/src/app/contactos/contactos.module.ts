import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from './contactos-routing.module';
import { VerComponent } from './pages/ver/ver.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Listado3Component } from './pages/listado3/listado3.component';
import { EditarComponent } from './pages/editar/editar.component';

@NgModule({
  declarations: [
    VerComponent,
    ListadoComponent,
    Listado3Component,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactosModule { }
