import { Component } from '@angular/core';
<<<<<<< HEAD
import { Contacto } from '../../interfaces/contacto.interface';
=======
import { Contacto } from 'src/interfaces/contacto.interface';
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8

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

  // Lista de contactos representados en la tabla
  contactos: Contacto[] = [];  

  // Término de búsqueda
  termino : string = 'Paco';

  //-----------------------------------------------------
  // Gestores de eventos
  //-----------------------------------------------------  
  buscar() : void {

    let contacto: Contacto = {
      id            : 1,
      nombre        : 'Paco',
      apellidos     : 'García'
    };

    // Añade el contacto al array de contactos
    this.contactos.push(contacto);    
  }
  
  borrarContacto(id : number) : void {
    // TODO implementar
  }
}
