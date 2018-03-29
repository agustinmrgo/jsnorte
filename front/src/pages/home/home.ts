import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Persona from '../../models/Persona';
//import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dni: number;
  nombre: string;
  apellido: string;
  arrayPersonas: Array<Persona> = [];

  constructor(public navCtrl: NavController) {

  }

  crearPersona() {
    //objeto mapeado con Persona con pura magia
    let temp = {
      dni: this.dni,
      nombre: this.nombre,
      apellido: this.apellido
    }
    let p = new Persona(temp);
    this.arrayPersonas.push(p);
    //limpiar formulario
    this.dni = null;
    this.nombre = null;
    this.apellido = null;
  }
  
  pseleccionada : Persona;
  mostrarPersona(p){
    this.pseleccionada = p;
  }

}
