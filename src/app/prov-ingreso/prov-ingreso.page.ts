import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-prov-ingreso',
  templateUrl: './prov-ingreso.page.html',
  styleUrls: ['./prov-ingreso.page.scss'],
})
export class ProvIngresoPage implements OnInit {
  formularioProveedor: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController, public alertController: AlertController) {
    this.formularioProveedor = this.fb.group({
      nombreProveedor: ['', Validators.required],
      patenteVehiculo: ['', Validators.required],
      numeroOc: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      horaIngreso: ['', Validators.required],
      observaciones: ['']
    });
  }

  ngOnInit() {
  }

  guardar() {
    let movimiento_registro_proveedor = this.formularioProveedor.value;

    // Combinar fecha y hora en un solo objeto Date
    let fechaIngreso = new Date(movimiento_registro_proveedor.fechaIngreso);
    let horaIngreso = new Date(movimiento_registro_proveedor.horaIngreso);

    // Ajustar las horas, minutos y segundos de fechaIngreso usando horaIngreso
    fechaIngreso.setHours(horaIngreso.getHours(), horaIngreso.getMinutes(), horaIngreso.getSeconds());

    if (isNaN(fechaIngreso.getTime())) {
      console.error('Fecha inválida');
      return;
    }

    movimiento_registro_proveedor.fechaIngreso = fechaIngreso.toISOString();

    // Obtener el array existente de `movimiento_registro_proveedor` o inicializar uno nuevo
    let movimientos = JSON.parse(localStorage.getItem('movimiento_registro_proveedor') || '[]');
    
    // Agregar la nueva entrada al array
    movimientos.push(movimiento_registro_proveedor);
    
    // Guardar el array actualizado en `localStorage`
    localStorage.setItem('movimiento_registro_proveedor', JSON.stringify(movimientos));
    
    console.log('Formulario:', movimiento_registro_proveedor); // Debug: Verificar que los datos se están recogiendo
    this.navCtrl.navigateRoot('registro-exitoso');
  }
}
