import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiExitosaPageRoutingModule } from './noti-exitosa-routing.module';

import { NotiExitosaPage } from './noti-exitosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiExitosaPageRoutingModule
  ],
  declarations: [NotiExitosaPage]
})
export class NotiExitosaPageModule {}
