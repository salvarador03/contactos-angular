import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';

@Component({
  selector: 'app-tabla-contactos',
  templateUrl: './tabla-contactos.component.html'
})
export class TablaContactosComponent {

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
   * Para borrar contacto se pasa el índice dentro de la tabla de contactos.
   * Más que nada porque luego se evita tener que recorrer la tabla para hacer la eliminación
   * 
   * @param indice 
   */
  borrarContacto(indice: number): void {
    this.onBorrar.emit(indice);
  }
}
