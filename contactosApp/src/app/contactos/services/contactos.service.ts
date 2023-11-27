import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contacto } from '../interfaces/contacto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  // Ruta base para todas las llamadas al servicio
  // se toma de environment
  private contactosUrl = `${environment.contactosBackendBaseUrl}/contactos`;
  private debug = environment.debug;

  constructor(
    // Necesitamos este objeto para hacer peticiones. 
    private httpClient: HttpClient    
  ) { }

  /**
   *  Dado el filtro, retorna las tareas que coinciden con el criterio
   */ 
  getContactos(filtro: string = ''): Observable<Contacto []> {

    // Calcula el recurso incluyendo el filtro
    const url : string = `${this.contactosUrl}${(filtro.length)?'?q='+filtro:''}`;

    // Retorna un observable
    return this.httpClient.get<Contacto []>(url);
  }  

  /**
   * Obtiene un contacto
   */
  getContacto(id : String): Observable<Contacto> {
      
    // Calcula el recurso incluyendo el filtro
    const url : string = `${this.contactosUrl}/${id}`;

    // Carga el contacto
    return this.httpClient.get<Contacto>(url);
  }  


  /**
   * Borra un contacto
   */
  borrarContacto(contacto : Contacto): Observable<Contacto> {
      
    // Calcula el recurso incluyendo el filtro
    const url : string = `${this.contactosUrl}/${contacto.id}`;

    // Llama a eliminar la tarea
    return this.httpClient.delete<Contacto>(url);
  }  

}
