import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto.interface';


@Component({
  selector: 'app-listado2',
  templateUrl: './listado2.component.html'
})
export class Listado2Component {
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

    this.contactos.push(contacto);
  }
  /**
     * Esto es el array de tareas que se va a renderizar
     */
  @Input() contactos: Contacto[] = [];

  /**
   * Evento que se va a emitir desde este componente cuando se quiera 
   * borrar une tarea
   */
  @Output() onBorrar: EventEmitter<number> = new EventEmitter();

  constructor() { }

  /**
   * Bara borrar tarea se pasa el índice dentro de la tabla de tareas.
   * Más que nada porque luego se evita tener que recorrer la tabla para hacer la eliminación
   * 
   * @param indice 
   */
  borrarContacto(indice: number): void {
    this.onBorrar.emit(indice);
  }
}

