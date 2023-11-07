import { Component } from '@angular/core';

@Component({
  selector: 'app-root',     // Este atributo indica el elemento, el 
                            // selector que identifica este componente.
                            // Se puede utilizar esto en la página para 
                            // insertarlo.
  templateUrl: './app.component.html',  // ruta relativa a la plantilla a 
                                        // emplear para el componente. 
                                        // Contiene el HTML que se va a 
                                        // insertar en el punto
                                        // donde está el componente.
                                        // También podríamos utilizar el 
                                        // atributo template para pasar el 
                                        // código html como una cadena de 
                                        // texto
  styleUrls: ['./app.component.css']    // EL CSS que se va a aplicar a 
                                        // este componente.
})
export class AppComponent {
  title: string = 'contactosApp';     // Este será el título de mi aplicación
                                    // Aquí defino las propiedades de mi 
                                    // componente. Puedo añadir, cambiar 
                                    // lo que sea necesario 
                                    // para representar el estado de mi
                                    // componente


numero: number = 0;                 // Este atributo lo vamos a utilizar 
                                    // en un ejemplo

sumar(v : number) {                 // Un par de métodos de ejemplo
this.numero++;
}

restar(v: number) {
this.numero--;
}                                    
}