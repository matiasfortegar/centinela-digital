import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInicioComponentRoutingModule } from './menu-inicio-routing.module';

import { MenuInicioComponent } from './menu-inicio.component';
//Para poder utilizar el formulario y agrego en imports
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInicioComponentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MenuInicioComponent]
})
export class MenuInicioComponentModule {}
