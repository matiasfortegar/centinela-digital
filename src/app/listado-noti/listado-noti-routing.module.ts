import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoNotiPage } from './listado-noti.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoNotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoNotiPageRoutingModule {}
