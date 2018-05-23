import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Persona from '../../models/Persona';
import { Content, App, MenuController } from 'ionic-angular';
import { ConsultasProvider } from '../../providers/consultas/consultas';
import { PersonaDetallePage } from '../persona-detalle/persona-detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  name: string;
  username: string;
  email: string;
  arrayPersonas : any;
  p2: boolean;

  constructor(public navCtrl: NavController, private prv: ConsultasProvider, private navPrm: NavParams, private app: App, menu: MenuController) {
    // app._setDisableScroll(true);
    menu.enable(true);
    this.prv.holis().then((res) => {
      this.arrayPersonas = res;
      console.log("Holis promesa cumplida");
      console.log(this.arrayPersonas);
    });
  }

  crearPersona() {
    // objeto mapeado con Persona con pura magia
    let temp = {
      name: this.name,
      username: this.username,
      email: this.email
    }
    let p = new Persona(temp);
    console.log(p);
    this.arrayPersonas.push(p);
    // console.log(this.arrayPersonas);
    // limpiar formulario
    this.name = null;
    this.username = null;
    this.email = null;
    // this.navCtrl.push(PersonaDetallePage, {persona: p});
    // let parametros = {
    //   name: p.name,
    //   username: p.username,
    //   mail: p.email
    // }
    // this.prv.nuevoMarengo(parametros).then((res) => {
    //   console.log("Respuesta desde el Home.ts",res);
    // });
  }

  pseleccionada: Persona;
  mostrarPersona(p) {
    this.pseleccionada = p;
  }

}
