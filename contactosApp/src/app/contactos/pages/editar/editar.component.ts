import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ContactosService } from '../../services/contactos.service';
import { Contacto } from 'src/interfaces/contacto.interface';

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
    id                : [-1],

    nombre            : ['', 
                          [ Validators.required /*, this.validacionService.validarEmpiezaMayuscula ],
                          [ this.validacionTituloService */]
                        ],

    apellidos         : ['', 
                          [ Validators.required] ],
}, {  
  // 008 Este segundo argumento que puedo enviar al formgroup permite por ejemplo ejecutar
  // validadores sincronos y asíncronos. Son validaciones al formgroup
 // validators: [ this.validacionService.camposNoIguales('id_informador', 'id_asignado') ]
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
    // TODO arreglar para que funcione guardar nombre que existe
    // this.formulario.get('titulo')?.clearAsyncValidators();
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

crearContacto() {
  this.contactosService.agregarContacto(this.formulario.getRawValue())
  {
    next: (contacto: Contacto) => {
        this.router.navigate
    }
  }
}

esCampoNoValido(campo: string) : boolean {
  return true;
}

mensajeErrorCampo(campo: string) : string {
  return "";
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
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();

      this.dialogService.mostrarMensaje('Por favor, revise los datos');

      return
    }
    if(this.formulario.get('id')?.value > 0){
        // actualiza la tarea
    } else {
        // crea la tarea
        this.crearContacto();
    }
}
}
