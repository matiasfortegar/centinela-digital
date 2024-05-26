import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {
  formularioSeguridad: FormGroup; 

  constructor(private fbs: FormBuilder, private navCtrl: NavController, /*Alertas*/ public alertController: AlertController) {
    this.formularioSeguridad = this.fbs.group({
      notificar: ['']
    });
  }
  ngOnInit() {
  }

guardarNota() {
  let nota_seguridad = this.formularioSeguridad.value;

    // Obtener el array existente de `salida_proveedor` o inicializar uno nuevo
    let notificacion = JSON.parse(localStorage.getItem('nota_seguridad') || '[]');

    // Agregar la nueva entrada al array
    notificacion.push(nota_seguridad);

    // Guardar el array actualizado en `localStorage`
    localStorage.setItem('nota_seguridad', JSON.stringify(notificacion));
    console.log('FormularioSeguridad:', nota_seguridad); // Debug: Verificar que los datos se están recogiendo
    this.navCtrl.navigateRoot('noti-exitosa');

}

}
