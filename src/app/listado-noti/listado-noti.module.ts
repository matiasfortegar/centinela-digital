import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoNotiPageRoutingModule } from './listado-noti-routing.module';

import { ListadoNotiPage } from './listado-noti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoNotiPageRoutingModule
  ],
  declarations: [ListadoNotiPage]
})
export class ListadoNotiPageModule {}
