import { Component } from '@angular/core';
import { ContactosService } from 'src/app/contactos/services/contactos.service';

@Component({
  selector: 'app-estadisticas-nombre',
  templateUrl: './estadisticas-nombre.component.html',
})
export class EstadisticasNombreComponent {
 
  // Define la variable que va a almacenar los puntos en el gráfico
 dataPoints: any[] = [];
  
 // Puntero a la gráfica
 chart:any;

 // Opciones del gráfico 
 chartOptions: any = {};    

 constructor(

   private contactosService: ContactosService

 ) { }

 ngAfterViewInit(): void {

   // Carga los datos del gráfico
   this.contactosService.getContactos().subscribe(contactos => {

      // Crea un mapa con los puntos
      const puntos = new Map();
      
      // Para cada contacto
      for(let contacto of contactos) {
        
        const punto = puntos.get(contacto.nombre);
        if(punto) {
          punto.y++;
        } else {
          puntos.set(
            contacto.nombre,
            {
              name: contacto.nombre,
              y: 1
            }
          );
        }
      }

      // Añade los puntos en el Map al array
      puntos.forEach(punto => this.dataPoints.push(punto));
      
      // Si no asigna aquí las opciones
      // no se refresca el gráfico
      this.chartOptions = {    
        exportEnabled: false,
        animationEnabled: true,
        title:{
            text: "Tareas por estado"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name}",
            legendText: "{name} (#percent%)",
            indexLabelPlacement: "outside",
            dataPoints: this.dataPoints      
        }]
      };
   });    
 }
}
