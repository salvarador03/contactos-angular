import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './peliculas/pages/formulario/formulario.component';
import { MenuComponentComponent } from './shared/components/menu-component/menu-component.component';
import { TablaPeliculasComponent } from './peliculas/components/tabla-peliculas/tabla-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponentComponent,
    TablaPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
