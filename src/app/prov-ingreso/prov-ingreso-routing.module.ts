import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvIngresoPage } from './prov-ingreso.page';

const routes: Routes = [
  {
    path: '',
    component: ProvIngresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvIngresoPageRoutingModule {}
