import { Component } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';
import { ContactosService } from '../../services/contactos.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-listado2',
  templateUrl: './listado2.component.html'
})
export class Listado2Component {

  // Lista de contactos representados en la tabla
  contactos: Contacto[] = [];  

  //------------------------------------------------------------------
  // Inicialización
  //------------------------------------------------------------------
  constructor(
    private contactosService: ContactosService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    // Carga la lista de contactos
    this.cargarContactos();
  }

  //------------------------------------------------------------------
  // Gestores de eventos
  //------------------------------------------------------------------

  /**
    *  Método a invocar para lanzar la búsqueda 
    */   
  buscar(termino: string): void {
    
    // Aquí se hace la búsqueda por el término de búsqueda
    this.cargarContactos(termino);
  }

  /**
   * Borrar tarea recibe el evento. El evento de la tabla de contactos emite el ID en la tabla
   * 
   * @param indice 
   */
  borrarContacto(indice: number) {

    // Obtiene la tarea a eliminar
    const contacto = this.contactos[indice];
  
    // Si el usuario me confirma que quiere eliminar la tarea, la elimina
    this.dialogService.solicitarConfirmacion(`¿Está seguro de que quiere eliminar el contacto: ${contacto.nombre}?`, 'Atención',
      () => {

        // Elimina la tarea
        this.contactosService.borrarContacto(contacto).subscribe((contactoEliminado) => {

          // Muestra un objeto vacío, ya que el servidor no devuelve nada.
          console.log(contactoEliminado);
        
          // Elimina la tarea del array
          this.contactos.splice(indice, 1);
        });      
      }
    );    
  }

  //------------------------------------------------------------------
  // Carga de datos
  //------------------------------------------------------------------
  
  /**
   * Pasado el término, carga los contactos.
   * 
   * @param termino 
   */
  cargarContactos(termino : string = '') : void {

    // Llama a cargar los contactos desde el servicio
    this.contactosService.getContactos(termino)
      .subscribe(
        contactos => this.contactos = contactos
      );
  }

}
