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
  proveedores: any[] = [];
  proveedorSeleccionado: any = null;

  constructor(private fb: FormBuilder, private navCtrl: NavController, public alertController: AlertController) {
    this.formularioProveedor = this.fb.group({
      nombreProveedor: ['', Validators.required],
      patenteVehiculo: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      horaSalida: ['', Validators.required],
      observaciones: ['']
    });
  }

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    const movimientos = JSON.parse(localStorage.getItem('movimiento_registro_proveedor') || '[]');
    this.proveedores = movimientos;
  }

  seleccionarProveedor(event: any) {
    const patenteVehiculo = event.target.value;
    const nombreProveedor = event.target.value;

    this.proveedorSeleccionado = this.proveedores.find(proveedor => proveedor.patenteVehiculo === patenteVehiculo);
    if (this.proveedorSeleccionado) {
      this.formularioProveedor.patchValue({
        patenteVehiculo: this.proveedorSeleccionado.patenteVehiculo,
        nombreProveedor: this.proveedorSeleccionado.nombreProveedor
      });
    }
  }

  guardar() {
    if (!this.proveedorSeleccionado) {
      console.error('Proveedor no seleccionado');
      return;
    }

    let salida_proveedor = this.formularioProveedor.value;

    let fechaSalida = new Date(salida_proveedor.fechaSalida);
    let horaSalida = new Date(salida_proveedor.horaSalida);
    fechaSalida.setHours(horaSalida.getHours(), horaSalida.getMinutes(), horaSalida.getSeconds());

    if (isNaN(fechaSalida.getTime())) {
      console.error('Fecha inválida');
      return;
    }

    salida_proveedor.fechaSalida = fechaSalida.toISOString();
    salida_proveedor.nombreProveedor = this.proveedorSeleccionado.nombreProveedor;
    salida_proveedor.numeroOc = this.proveedorSeleccionado.numeroOc;
    salida_proveedor.fechaIngreso = this.proveedorSeleccionado.fechaIngreso;
    salida_proveedor.horaIngreso = this.proveedorSeleccionado.horaIngreso;

    let movimientos = JSON.parse(localStorage.getItem('salida_proveedor') || '[]');
    movimientos.push(salida_proveedor);
    localStorage.setItem('salida_proveedor', JSON.stringify(movimientos));

    console.log('Formulario:', salida_proveedor);
    this.navCtrl.navigateRoot('salida-exitoso');
  }
}
