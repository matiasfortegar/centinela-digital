import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoSalidasPageRoutingModule } from './listado-salidas-routing.module';

import { ListadoSalidasPage } from './listado-salidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoSalidasPageRoutingModule
  ],
  declarations: [ListadoSalidasPage]
})
export class ListadoSalidasPageModule {}
