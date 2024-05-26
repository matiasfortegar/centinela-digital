import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noti',
  templateUrl: './listado-noti.page.html',
  styleUrls: ['./listado-noti.page.scss'],
})
export class ListadoNotiPage implements OnInit {
  notis: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarNotis();
  }

  cargarNotis() {
    const notisGuardadas = localStorage.getItem('nota_seguridad');
    if (notisGuardadas) {
      this.notis = JSON.parse(notisGuardadas);
    } else {
      this.notis = [];
    }
  }
}
