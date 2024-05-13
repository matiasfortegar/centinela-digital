import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalidaExitosoPage } from './salida-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: SalidaExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalidaExitosoPageRoutingModule {}
