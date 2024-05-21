import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotiExitosaPage } from './noti-exitosa.page';

const routes: Routes = [
  {
    path: '',
    component: NotiExitosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotiExitosaPageRoutingModule {}
