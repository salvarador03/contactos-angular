import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ContactosService } from '../services/contactos.service';
import { ValidacionService } from 'src/app/shared/services/validacion.service';

@Injectable({
  providedIn: 'root'
})
export class ValidacionNombreService implements AsyncValidator {

  constructor(
    private validacionService      : ValidacionService,
    private contactosService       : ContactosService
  ) {       
      validacionService.registrarMensajeError("nombreDuplicado", "El nombre ya existe");
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
        
        map( contactos => {          
          if(contactos.length > 0) {
            return { nombreDuplicado: true }
          } else {
            return null;
          }            
        })  
      );    
  }

  registerOnValidatorChange?(fn: () => void): void {
    return;
  }
}
