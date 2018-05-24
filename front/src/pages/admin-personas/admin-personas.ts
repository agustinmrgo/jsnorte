import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ConsultasProvider } from '../../providers/consultas/consultas';
import Persona from "../../models/Persona";

/**
 * Generated class for the AdminPersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-personas',
  templateUrl: 'admin-personas.html',
})
export class AdminPersonasPage {

  name: string;
  username: string;
  email: string;
  arrayPersonas : any;

  constructor(public navCtrl: NavController, private prv: ConsultasProvider, private navPrm: NavParams, private app: App) {
    this.prv.holis().then((res) => {
      this.arrayPersonas = res;
      console.log("Holis promesa cumplida");
      console.log(this.arrayPersonas);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPersonasPage');
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
    // limpiar formulario
    this.name = null;
    this.username = null;
    this.email = null;
  }

  pseleccionada: Persona;
  mostrarPersona(p) {
    this.pseleccionada = p;
  }

}
