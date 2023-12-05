import { Component } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

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
