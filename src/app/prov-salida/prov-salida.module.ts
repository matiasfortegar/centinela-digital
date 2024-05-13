import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvSalidaPageRoutingModule } from './prov-salida-routing.module';

import { ProvSalidaPage } from './prov-salida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvSalidaPageRoutingModule
  ],
  declarations: [ProvSalidaPage]
})
export class ProvSalidaPageModule {}
