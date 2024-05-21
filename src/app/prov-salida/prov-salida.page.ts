import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prov-salida',
  templateUrl: './prov-salida.page.html',
  styleUrls: ['./prov-salida.page.scss'],
})
export class ProvSalidaPage implements OnInit {
  formularioProveedor: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
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

    // Convertir fecha y hora a formato ISO 8601
    salida_proveedor.fechaSalida = new Date(salida_proveedor.fechaSalida).toISOString().split('T')[0];
    salida_proveedor.horaSalida = new Date(salida_proveedor.horaSalida).toISOString().split('T')[1];

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
