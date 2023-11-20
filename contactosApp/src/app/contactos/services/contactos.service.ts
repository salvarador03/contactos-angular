import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Coge por defecto el de enviroment.development
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Contacto } from 'src/interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  // Ruta base para todas las llamadas al servicio
  // se toma de environment
  private contactosBaseUrl = environment.contactosBackendBaseUrl;
  private debug = environment.debug;

  constructor(
    // Necesitamos este objeto para hacer peticiones. 
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
}
