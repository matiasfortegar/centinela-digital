import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-salidas',
  templateUrl: './listado-salidas.page.html',
  styleUrls: ['./listado-salidas.page.scss'],
})
export class ListadoSalidasPage implements OnInit {
  salidas: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cargarSalidas();
  }

  cargarSalidas() {
    const salidasGuardadas = localStorage.getItem('salida_proveedor');
    if (salidasGuardadas) {
      this.salidas = JSON.parse(salidasGuardadas);
    } else {
      this.salidas = [];
    }
  }
}
