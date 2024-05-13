import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInicioComponent } from './menu-inicio.component';

const routes: Routes = [
  {
    path: '',
    component: MenuInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInicioComponentRoutingModule {}
