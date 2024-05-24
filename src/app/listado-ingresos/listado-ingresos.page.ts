import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-ingresos',
  templateUrl: './listado-ingresos.page.html',
  styleUrls: ['./listado-ingresos.page.scss'],
})
export class ListadoIngresosPage implements OnInit {
  ingresos: any[] = [];
  
  constructor() { }

  ngOnInit() {
    this.cargarMovimientos();
  }

  
  cargarMovimientos() {
    const ingresosGuardados = localStorage.getItem('movimiento_registro_proveedor');
    if (ingresosGuardados) {
      this.ingresos = JSON.parse(ingresosGuardados);
    } else {
      this.ingresos = [];
    }
  }

}
