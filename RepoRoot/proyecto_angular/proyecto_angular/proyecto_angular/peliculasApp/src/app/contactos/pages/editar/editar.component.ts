import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ContactosService } from '../../services/contactos.service';
import { Contacto } from '../../interfaces/contacto.interface';
import { switchMap, tap } from 'rxjs';
import { ValidacionService } from 'src/app/shared/services/validacion.service';
import { ValidacionNombreService } from '../../validators/validacion-nombre.service';

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
      id          : [-1],

      nombre      : [ '', /* Valor por defecto */
                      [ Validators.required, this.validacionService.validarEmpiezaMayuscula ],
                      [ this.validacionNombreService ]
                    ],
                
      apellidos   : [
                      '', 
                      [ Validators.required, this.validacionService.validarEmpiezaMayuscula] 
                    ],

    }, {  
      // 008 Este segundo argumento que puedo enviar al formgroup permite por ejemplo ejecutar
      // validadores sincronos y asíncronos. Son validaciones al formgroup
      validators: [ this.validacionService.camposNoIguales('nombre', 'apellidos') ]
    });

  // Defino campos sueltos auxiliares que voy a utilizar
  // En este caso utilizo este para el datalist aunque en este caso
  // lo podría meter dentro del formulario ya que no va a afectar al funcionamiento.
  nombreInformador    : FormControl = this.fb.control('', Validators.required);

  // Estos arrays contendrán los elementos que voy a cargar en los selects
  //selectInformador    : EntradaSelect[] = [];
  //selectAsignado      : EntradaSelect[] = [];
  //selectTiposTarea    : EntradaSelect[] = [];
  //selectEstadosTarea  : EntradaSelect[] = [];

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
    
    private contactosService  : ContactosService,

    private validacionService       : ValidacionService,
    private validacionNombreService : ValidacionNombreService

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
      // TODO arreglar par que funcione guardar nombre que existe
      // this.formulario.get('titulo')?.clearAsyncValidators();
    }

    // Carga el contenido de los selects desde la base de datos
    // this.cargarSelectTiposContacto();

    // Cuando se selecciona un tipo de tarea, se debe cargar el combo de 
    // estados para que contenga los estados para ese tipo de tarea
    //this.formulario.get('id_tipo_tarea')?.valueChanges.subscribe(id_tipo_tarea => {      
    //  this.cargarSelectEstados(id_tipo_tarea);
    //});  
  }


  //-------------------------------------------------------------------------------------
  // Funciones generales del formulario
  //-------------------------------------------------------------------------------------
  /**
   * Guarda los cambios y vuelve a la pantalla anterior. 
   */
  guardar() {

    // Si el formulario no es válido, muestra un mensaje de error y termina
    if(this.formulario.invalid) {
      
      // Marco los campos como tocados. De ese modo se mostrarán todos los errores
      // registrados en los campos
      this.formulario.markAllAsTouched();

      // Muestro mensaje de error
      this.dialogService.mostrarMensaje('Por favor, revise los datos');

      // Finaliza
      return;
    }

    // Si id_tarea es > 0 significa que la tarea ya existía. Es actualización
    if(this.formulario.get('id')?.value > 0) {

      // Actualiza la contacto
      this.actualizarContacto();

    } else {

      // Crea el contacto
      this.crearContacto();
    }
  } 


  /**
   * Comprueba si un campo es válido
   * 
   * @param campo 
   * @returns 
   */
  esCampoNoValido(campo : string) : boolean | undefined {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }  


  /**
   * Devuelce el mensaje de error asociado a un campo
   * 
   * @param campo 
   * @returns 
   */
  mensajeErrorCampo(campo : string) : string {
    const errors = this.formulario.get(campo)?.errors;
    let mensajeError = '';
    
    if(errors) {
      for(let e in errors) {

        // Obtiene el mensaje
        const mensaje = this.validacionService.getMensajeError(e);
        mensajeError = mensajeError + mensaje;        

        // Solo quiero el primero en estos momentos. Si hubiera más podría tenerlos en un atributo
        // y mostrarlos con un ngFor
        break;
      }
    }

    return mensajeError;
  }


  //-------------------------------------------------------------------------------------
  // Funciones de persistencia. Permiten guardar y recuperar tareas
  //-------------------------------------------------------------------------------------

  /**
   * Carga un contacto
   */
  cargarContacto() {
      
    // Si estamos en modo edición, obtiene los parámeros
    // y carga los datos
    this.activatedRoute.params
    
    // Usamos switchMap, que permite cambiar el id (el parámetro de entrada)
    // por la tarea
    .pipe(

        switchMap( ({id}) => this.contactosService.getContacto(id) ),
        
        // Este pipe muestra lo que viene
        tap(console.log)
    )
    // Finalmente, este subscribe recibe el resultado, que será el objeto
    .subscribe({

        // Reciebe el siguiente valor
        next: (contacto: Contacto) =>  {

          // Cargo los datos en el formulario.
          this.formulario.reset(contacto);
          
          //this.formulario.patchValue(respuesta.datos);  
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error: any) => {

          // Se vuelve al listado
          this.router.navigate([ '/contactos/listado2' ]);

          // Muestra un mensaje de error
          this.dialogService.mostrarToast('No ha sido posible cargar el contacto: '+ error);
  
          // Muestra el error por consola
          console.log(error);
        }        
    });        
  }


  /**
   * Crea un contacto a partir de los datos en el form y pasa a modo edición
   */
  crearContacto() {
    
    this.contactosService.agregarContacto(this.formulario.getRawValue()).subscribe(           
      {      
        // Reciebe el siguiente valor
        next: (contacto: Contacto) =>  {

          // Se ha guardado el contacto. Paso a modo edición
          this.router.navigate(['/contactos/editar', contacto.id ]);

          // Muestro un toast indicando que se ha guardado la tarea
          this.dialogService.mostrarToast("Contacto creada");

          // Muestra el contacto en el log
          console.log(contacto);
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error) => {
          
          this.dialogService.mostrarMensaje('No ha sido posible crear el contacto: '+error, 'ERROR');
          console.log(error);
        }
      }
    );              
  }

 /**
   * Actualiza un contacto
   */
  actualizarContacto() {
    this.contactosService.actualizarContacto(this.formulario.getRawValue())
      .subscribe(

        {      
          // Reciebe el siguiente valor
          next: (contacto: Contacto) =>  {              
          },

          // El observer ha recibido una notificación completa
          complete: () => {     
            this.dialogService.mostrarToast("Contacto guardada");
          },

          // El observer ha recibido un error
          error: (error) => {
            this.dialogService.mostrarMensaje('No ha sido posible crear el contacto: '+error, 'ERROR');
            console.log(error);
          }
        }
      );
  }


}
