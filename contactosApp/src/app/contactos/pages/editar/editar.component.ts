import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ContactosService } from '../../services/contactos.service';
import { ValidacionService } from '../../services/validacion.service';
import { ValidacionTareasService } from '../../services/validacion-tareas.service';
import { ValidacionTituloService } from '../../services/validacion-titulo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent {
  // Defino el formulario
  // En esta definición incluyo
  // - Nombres de los campos. Deben coincidir con los del objeto
  // - Opciones de los campos
  // - Validaciones locales
  // - Validaciones asíncronas
  formulario: FormGroup = this.fb.group({
    Id                : [-1],

    nombre            : [ '', 
                          [ Validators.required, this.validacionService.validarEmpiezaMayuscula ],
                          [ this.validacionTituloService ]
                        ],
    apellidos     : ['', [ Validators.required] ],
    empresa       : ['', [ Validators.required] ],

    puesto     : ['', [ Validators.required] ],

    web         : [ {
                            value: -1, 
                            disabled: true
                          }, 
                          [ Validators.required] 
                        ],

    notas        : [''],
    direccion : [''],
    poblacion  : [''],
    provincia       : ['', [ Validators.required] ],
    cp  : [''],


}, {  
  // 008 Este segundo argumento que puedo enviar al formgroup permite por ejemplo ejecutar
  // validadores sincronos y asíncronos. Son validaciones al formgroup
  validators: [ this.validacionService.camposNoIguales('id_informador', 'id_asignado') ]
});

// Defino campos sueltos auxiliares que voy a utilizar
// En este caso utilizo este para el datalist aunque en este caso
// lo podría meter dentro del formulario ya que no va a afectar al funcionamiento.
nombreInformador    : FormControl = this.fb.control('', Validators.required);

/*
// Estos arrays contendrán los elementos que voy a cargar en los selects
selectInformador    : EntradaSelect[] = [];
selectAsignado      : EntradaSelect[] = [];
selectTiposTarea    : EntradaSelect[] = [];
selectEstadosTarea  : EntradaSelect[] = [];
*/

// Indica si la tarea se está actualizando
actualizando: boolean = false;

//-------------------------------------------------------------------------------------
// Inicialización
//-------------------------------------------------------------------------------------

constructor(

  private activatedRoute    : ActivatedRoute,
  private fb                : FormBuilder,
  private router            : Router,
  private dialogService     : DialogService,
  private contactosService     : ContactosService,
  private validacionService       : ValidacionService,
  private validacionTareasService : ValidacionTareasService,
  private validacionTituloService : ValidacionTituloService

) { }

/**
 * Inicialización de la página
 */
ngOnInit(): void {

  // Si no estamos en modo edición, sale de aquí
  if(this.router.url.includes('editar')) {    
    this.cargarContacto();
    this.actualizando = true;

    // Se carga la validación asíncrona en caso de edición
    this.formulario.get('titulo')?.clearAsyncValidators();
  }

  // Carga el contenido de los selects desde la base de datos
  this.cargarSelectUsuarioAsignado();
  this.cargarSelectTiposTarea();

  // Cuando se selecciona un tipo de tarea, se debe cargar el combo de 
  // estados para que contenga los estados para ese tipo de tarea
  this.formulario.get('id_tipo_tarea')?.valueChanges.subscribe(id_tipo_tarea => {      
    this.cargarSelectEstados(id_tipo_tarea);
  });  
}

cargarContacto() {
  return true;  
}

cargarSelectUsuarioAsignado(){
  return true;
}

cargarSelectTiposTarea(){
  return true;
}

cargarSelectEstados(params:bigint) {
  return true;
}
guardar() {
  return true;
}
}
