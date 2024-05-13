import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalidaExitosoPageRoutingModule } from './salida-exitoso-routing.module';

import { SalidaExitosoPage } from './salida-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidaExitosoPageRoutingModule
  ],
  declarations: [SalidaExitosoPage]
})
export class SalidaExitosoPageModule {}
