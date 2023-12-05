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
   * Obtiene un contacto por nombre
   */
  getContactosPorNombre(nombre : String) : Observable<Contacto []> {
    const url : string = `${this.contactosUrl}?nombre=${nombre}`;

    // Carga el contacto
    return this.httpClient.get<Contacto []>(url);
  }

  /**
   * Agrega un contacto a la base de datos
   */
  agregarContacto(contacto: Contacto) : Observable<Contacto> {
    
    // Nos aseguramos de que el contacto no tiene atributo ID
    delete contacto.id;

    // Registra el contacto que se va a dar de alta en la base de datos    
    console.log(contacto);

    // Devuelve el resultado
    return this.httpClient.post<Contacto>(this.contactosUrl, contacto);
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


  /**
   * Agrega un contacto a la base de datos
   */
  actualizarContacto(contacto: Contacto) : Observable<Contacto> {

    // Calcula el recurso incluyendo el filtro
    const url : string = `${this.contactosUrl}/${contacto.id}`;    

    // Registra el contacto que se va a dar de alta en la base de datos    
    console.log(contacto);

    // Devuelve el resultado
    return this.httpClient.put<Contacto>(url, contacto);
  }

}
