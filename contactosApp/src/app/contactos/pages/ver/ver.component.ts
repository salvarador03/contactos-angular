import { Component } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';
import { switchMap, tap } from 'rxjs';

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
  
    // Carga el contacto
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
  
          switchMap( ({id}) => this.contactosService.getContacto(id) ),
          
          // Este pipe muestra lo que viene
          tap(console.log)
      )
      // Finalmente, este subscribe recibe el resultado, que será el objeto
      .subscribe(contacto => {
        
          // Carga los datos
          this.contacto = contacto;
      });
    }  
}
