import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditarComponent,
    VerComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    FormsModule
  ]
})
export class ContactosModule { }
