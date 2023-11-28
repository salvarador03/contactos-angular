import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { ValidacionService } from "src/app/shared/services/validacion.service";
import { environment } from "src/environments/environment";
import { ContactosService } from "../services/contactos.service";
import { Observable, map } from "rxjs";

export class ValidacionNombreService implements AsyncValidator {

  // Ruta base para todas las llamadas al servicio
  private taskmanBaseUrl = environment.contactosBackendBaseUrl;
  private debug = environment.debug;

  constructor(

    private validacionService   : ValidacionService,
    private contactosService       : ContactosService

  ) { 

    validacionService.registrarMensajeError("contactoDuplicado", "Ya existe un contacto con ese nombre");

  }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    // Obtengo el nombre como argumento
    const nombre = control.value;

    // Tendré que usar un pipe que evalue y me retorne el objeto que necesito para generar validation errors
    // Utilizo el operador map para cambiar el objeto que recibo por el objeto con el error
    return this.contactosService.getContactosPorNombre(nombre)
      .pipe(
        
        // Esta pausa me permite comprobar como cambia el estado del formulario de INVALID a PENDING a VALID
        //delay(5000),

        map( contactos  => {
          //debugger; -> Para cuando llegue a este punto se para el programa. (Se puede poner dentro de las funciones flecha solo)
          if(contactos.length > 0) {
            return { nombreDuplicado: true }
          } else {
            return null;
          }            
        })  
      );
  }  
}