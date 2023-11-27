import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from './contactos-routing.module';
<<<<<<< HEAD
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Listado2Component } from './pages/listado2/listado2.component';
import { TablaContactosComponent } from './components/tabla-contactos/tabla-contactos.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListadoComponent,
    EditarComponent,
    VerComponent,
    Listado2Component,
    TablaContactosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ContactosRoutingModule,
    SharedModule,
=======
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
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8
    ReactiveFormsModule
  ]
})
export class ContactosModule { }
