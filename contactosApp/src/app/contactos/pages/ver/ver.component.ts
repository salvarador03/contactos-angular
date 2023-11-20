import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ContactosService } from 'src/app/contactos/services/contactos.service';
import { Contacto } from 'src/interfaces/contacto.interface';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent {
  contacto! : Contacto;   
//-------------------------------------------------------------------------------------
// Inicialización
//-------------------------------------------------------------------------------------

constructor(

  private activatedRoute    : ActivatedRoute,
  private router            : Router,
  private contactosService     : ContactosService

) { }

/**
 * Inicialización de la página
 */
ngOnInit(): void {

  // Carga la tarea
  this.cargarContacto();

}


//-------------------------------------------------------------------------------------
// Funciones de persistencia. Permiten guardar y recuperar tareas
//-------------------------------------------------------------------------------------

/**
 * Cuando estamos editando, este método carga la tarea que estamos editando en el formulario
 */
 cargarContacto() {
    
  // Si estamos en modo edición, obtiene los parámeros
  // y carga los datos
  this.activatedRoute.params
    
    // Usamos switchMap, que permite cambiar el id (el parámetro de entrada)
    // por la tarea
    .pipe(

        switchMap( ({id}) => this.contactosService.getContactoPorId(id) ),
        
        // Este pipe muestra lo que viene
        tap(console.log)
    )
    // Finalmente, este subscribe recibe el resultado, que será el objeto
    .subscribe(respuesta => {
      
      if(respuesta.ok) {

        // Carga los datos
        this.contacto = respuesta.datos;

      } else {
        this.router.navigate([ '/contactos/listado' ]);
      }
    });
  }
}
