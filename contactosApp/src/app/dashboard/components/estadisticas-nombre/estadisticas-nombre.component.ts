// Documentación aquí
//    https://canvasjs.com/docs/charts/integration/angular/

import { AfterViewInit, Component } from '@angular/core';
import { ContactosService } from '../../../contactos/services/contactos.service';

@Component({
  selector: 'app-estadisticas-nombre',
  templateUrl: './estadisticas-nombre.component.html'
})
export class EstadisticasNombreComponent implements AfterViewInit {

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
    this.contactosService.getContactos().subscribe(respuesta => {

      // Obtiene la respuesta
      /*
      for (var i = 0; i < data.length; i++) {

        // Crea el punto
        const punto = {
          name: data[i].estado,
          y: Number(data[i].contador)
        }

        // Añade el punto
        this.dataPoints.push(punto);
      }      
      */
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
