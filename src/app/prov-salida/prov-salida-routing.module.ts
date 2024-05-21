import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvSalidaPage } from './prov-salida.page';

const routes: Routes = [
  {
    path: '',
    component: ProvSalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvSalidaPageRoutingModule {}
