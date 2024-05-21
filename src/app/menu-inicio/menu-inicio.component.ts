import { Component, OnInit } from '@angular/core';
//Routing
// import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.scss'],
})
export class MenuInicioComponent  implements OnInit {
 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}


  salir(){
    //Funcionalidades sólo para utilizar con guard
    localStorage.setItem('ingresado','false');
    this.navCtrl.navigateRoot('login');
  }

}