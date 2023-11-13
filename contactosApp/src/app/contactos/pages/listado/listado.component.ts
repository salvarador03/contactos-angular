import { Component } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  contactos: Contacto[] = [];

  termino: string = '';

  buscar(): void {

    let contacto: Contacto = {
      id: 1,
      nombre: 'Sergio',
      apellidos: 'Alvarado Ramos',
      empresa : 'Empresa Chula',
      puesto : 'Puesto bueno',
      web : 'www.google.es'
    };
    let contacto2: Contacto = {
      id: 2,
      nombre: 'Paco',
      apellidos: 'Pérez García',
      empresa : 'Empresa Normal',
      puesto : 'Puesto medio',
      web : 'www.youtube.es'
    };

    this.contactos.push(contacto);
    this.contactos.push(contacto2);
  }

  borrarContacto(id: number) : void {
    //
  }

}
