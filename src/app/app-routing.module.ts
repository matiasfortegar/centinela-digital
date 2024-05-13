import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'menu-inicio',
    loadChildren: () => import('./menu-inicio/menu-inicio.module').then( m => m.MenuInicioComponentModule)
    // canActivate:[HomeGuard]
  },  {
    path: 'registro-exitoso',
    loadChildren: () => import('./registro-exitoso/registro-exitoso.module').then( m => m.RegistroExitosoPageModule)
  },
  {
    path: 'prov-ingreso',
    loadChildren: () => import('./prov-ingreso/prov-ingreso.module').then( m => m.ProvIngresoPageModule)
  },
  {
    path: 'prov-salida',
    loadChildren: () => import('./prov-salida/prov-salida.module').then( m => m.ProvSalidaPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
