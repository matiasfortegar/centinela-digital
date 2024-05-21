import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoSalidasPage } from './listado-salidas.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoSalidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoSalidasPageRoutingModule {}
