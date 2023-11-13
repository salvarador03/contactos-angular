import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { MenuComponent } from './shared/menu/menu/menu.component';
import { BusquedasComponent } from './shared/components/busquedas/busquedas.component';
import { Listado2Component } from './contactos/pages/listado2/listado2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    MenuComponent,
    BusquedasComponent,
    Listado2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
