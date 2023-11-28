import { Component } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto.interface';
import { ContactosService } from 'src/app/contactos/services/contactos.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listado3',
  templateUrl: './listado3.component.html'
})
export class Listado3Component {
  contactos: Contacto[] = [];

  termino: string = '';

  constructor(
    //private dialogService : DialogService,
    private contactosService : ContactosService
  ) {}

  ngOnInit(): void {

    // Carga las contactos
    this.cargarContactos();
  }
  
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

  borrarContacto(id: number) : void {
    //
  }
  /**
   * 
   * @param filtro Método para cargar las contactos
   * 
   */
  private cargarContactos(filtro: string | undefined = undefined) {
    
    // Cuando la pantalla se muestra se tienen que mostrar las contactos.
    this.contactosService.getContactosPorNombre(filtro ?? "")
     
      .pipe(

        // Este tap lo hago solo para mostrar los datos que pasan por aquí
        tap(console.log)
      )
      
      .subscribe( response => {
        
        // Si la respuesta es OK, la lista de contactos se asigna a la respuesta
        if(response.ok) {
          
          this.contactos = response.datos;    

        } else {

          // Muestra el mensaje de error
          //this.dialogService.mostrarMensaje(response.mensaje, 'ERROR');
        }
      });
  }

}
