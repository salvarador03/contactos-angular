import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';
<<<<<<< HEAD
import { Listado2Component } from './pages/listado2/listado2.component';

const routes: Routes = [
  {
    // No es necesario especificar nada en este atributo
    // Ya que estamos definiendo rutas hijas.
    path: '',
    children: [
      {
        // tareas/listado
        path: 'listado',
        component: ListadoComponent
      },
      {
        // tareas/listado2 (con componentes)
        path: 'listado2',
        component: Listado2Component
      },
      {
        // tareas/agregar
        path: 'agregar',
        component: EditarComponent
      },
      {
        // editar/XXXX donde XXXX es el id de tarea
        // Desde el componente se puede capturar ese ID
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        // Hace match para /XXXX donde XXXX es el id de tarea
        // desde el componente se captura y se puede mostrar
        // la tarea
        path: ':id',
        component: VerComponent
      },
      {
        // Por defecto, envía al listado.
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }  
];
=======

const routes: Routes = [
  {
    // No es necesario especificar nada en este atributo
    // Ya que estamos definiendo rutas hijas.
    path: '',
    children: [
      {
        // tareas/listado
        path: 'listado',
        component: ListadoComponent
      },
      {
        // tareas/agregar
        path: 'agregar',
        component: EditarComponent
      },
      {
        // editar/XXXX donde XXXX es el id de tarea
        // Desde el componente se puede capturar ese ID
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        // Hace match para /XXXX donde XXXX es el id de tarea
        // desde el componente se captura y se puede mostrar
        // la tarea
        path: ':id',
        component: VerComponent
      },
      {
        // Por defecto, envía al listado.
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosRoutingModule { }
