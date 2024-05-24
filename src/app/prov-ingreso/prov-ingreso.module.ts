import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvIngresoPageRoutingModule } from './prov-ingreso-routing.module';

import { ProvIngresoPage } from './prov-ingreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProvIngresoPageRoutingModule
  ],
  declarations: [ProvIngresoPage]
})
export class ProvIngresoPageModule {}
