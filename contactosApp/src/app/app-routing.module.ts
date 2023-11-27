import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {    
    // Módulo de autenticación
    path: 'auth',
    // La ruta que indico es la ruta del módulo a importar
    // la función flecha siempre va a ser así. 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),    
  },

  {
    // Cuadro de mandos
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),    
  },

  {
    // Gestión de contactos.
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule),
  },

  {
<<<<<<< HEAD
    // La ruta por defecto. Va a entrar aquí si solicitamos
    // una ruta no definida.
=======
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule),
  },
  {
>>>>>>> ca7a7bcffe0cace2b7e91b2922cde450a3cb8ee8
    path: '**',
    redirectTo: 'dashboard'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
