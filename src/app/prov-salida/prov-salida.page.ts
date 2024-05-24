import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-prov-salida',
  templateUrl: './prov-salida.page.html',
  styleUrls: ['./prov-salida.page.scss'],
})
export class ProvSalidaPage implements OnInit {
  formularioProveedor: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController, /*Alertas*/ public alertController: AlertController) {
    this.formularioProveedor = this.fb.group({
      nombreProveedor: ['', Validators.required],
      patenteVehiculo: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      horaSalida: ['', Validators.required],
      observaciones: ['']
    });
  }

  ngOnInit() { }

  guardar() {

    let salida_proveedor = this.formularioProveedor.value;
    // Combinar fecha y hora en un solo objeto Date
    let fechaSalida = new Date(salida_proveedor.fechaSalida);
    let horaSalida = new Date(salida_proveedor.horaSalida);

    // Ajustar las horas, minutos y segundos de fechaSalida usando horaSalida
    fechaSalida.setHours(horaSalida.getHours(), horaSalida.getMinutes(), horaSalida.getSeconds());

    if (isNaN(fechaSalida.getTime())) {
      console.error('Fecha inválida');
      return;
    }

    salida_proveedor.fechaSalida = fechaSalida.toISOString();

    // Obtener el array existente de `salida_proveedor` o inicializar uno nuevo
    let movimientos = JSON.parse(localStorage.getItem('salida_proveedor') || '[]');
    
    // Agregar la nueva entrada al array
    movimientos.push(salida_proveedor);
    
    // Guardar el array actualizado en `localStorage`
    localStorage.setItem('salida_proveedor', JSON.stringify(movimientos));
    
    console.log('Formulario:', salida_proveedor); // Debug: Verificar que los datos se están recogiendo
    this.navCtrl.navigateRoot('salida-exitoso');
  }
}
