import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadPageRoutingModule } from './seguridad-routing.module';

import { SeguridadPage } from './seguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SeguridadPageRoutingModule
  ],
  declarations: [SeguridadPage]
})
export class SeguridadPageModule {}
