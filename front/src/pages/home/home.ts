import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Persona from '../../models/Persona';
import { Content } from 'ionic-angular';
import { ConsultasProvider } from '../../providers/consultas/consultas';
import { PersonaDetallePage } from '../persona-detalle/persona-detalle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  dni: string;
  nombre: string;
  apellido: string;
  arrayPersonas : any;
  p2: boolean;

  constructor(public navCtrl: NavController, private prv: ConsultasProvider, private navPrm: NavParams) {
    // this.prv.holis().then((res) => {
    //   this.arrayPersonas = res;
    //   console.log(this.arrayPersonas);
    // });
  }

  crearPersona() {
    //objeto mapeado con Persona con pura magia
    let temp = {
      name: this.dni,
      username: this.nombre,
      email: this.apellido
    }
    let p = new Persona(temp);
    console.log(p);
    //this.arrayPersonas.push(p);
    //limpiar formulario
    this.dni = null;
    this.nombre = null;
    this.apellido = null;
    this.navCtrl.push(PersonaDetallePage, {persona: p});
    let parametros = {
      name: p.name,
      username: p.username,
      mail: p.email
    }
    this.prv.nuevoMarengo(parametros).then((res) => {
      console.log("Respuesta desde el Home.ts",res);
    });

  }

  pseleccionada: Persona;
  mostrarPersona(p) {
    this.pseleccionada = p;
  }

}
