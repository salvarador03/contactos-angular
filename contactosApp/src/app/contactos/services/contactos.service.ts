<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contacto } from '../interfaces/contacto.interface';
import { Observable } from 'rxjs';
=======
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Coge por defecto el de enviroment.development
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Contacto } from 'src/interfaces/contacto.interface';
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  // Ruta base para todas las llamadas al servicio
  // se toma de environment
<<<<<<< HEAD
  private contactosUrl = `${environment.contactosBackendBaseUrl}/contactos`;
=======
  private contactosBaseUrl = environment.contactosBackendBaseUrl;
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8
  private debug = environment.debug;

  constructor(
    // Necesitamos este objeto para hacer peticiones. 
<<<<<<< HEAD
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

=======
    private httpClient: HttpClient
  ) {}

  // Genera la url dado el nombre del script 
  private generarUrl(script: string) : string {
    return `${this.contactosBaseUrl}/ajax.php?s=${script}${this.debug?"&__debug":""}`;
  }
  /**
   *  Dado el filtro, retorna los contactos que coinciden con el criterio
   */ 
    getContactoPorId(filtro: string = '%'): Observable<Contacto> {
    
      // Inicializa el objeto con la petición
      const argumentos = {
        filtro: (filtro == '%')?filtro:filtro+'%'
      };
  
      // Retorna un observable
      return this.httpClient.get<Contacto>(this.generarUrl("_getContactosPorNombre"));
    }
  /**
   *  Dado el filtro, retorna los contactos que coinciden con el criterio
   */ 
  getContactosPorNombre(filtro: string = '%'): Observable<Contacto> {
    
    // Inicializa el objeto con la petición
    const argumentos = {
      filtro: (filtro == '%')?filtro:filtro+'%'
    };

    // Retorna un observable
    return this.httpClient.get<Contacto>(this.generarUrl("_getContactosPorNombre"));
  }

  /**
   * Borra un contacto pasado
   */
  borrarContacto(contacto : Contacto): Observable<Contacto> {
    
    // Inicializa el objeto con los argumentos de la petición
    const argumentos = {
      id: contacto.id
    };

    // Llama a eliminar el contacto
    return this.httpClient.post<Contacto>(this.generarUrl("_borrarContacto"), argumentos);
  }
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8
}
