// import { PersonaDetallePage } from './../persona-detalle/persona-detalle';
import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { ConsultasProvider } from '../../providers/consultas/consultas';
import Persona from "../../models/Persona";

@IonicPage()
@Component({
  selector: 'page-admin-personas',
  templateUrl: 'admin-personas.html',
})
export class AdminPersonasPage {

  name: string;
  username: string;
  email: string;
  public peopleArray : any = [];
  public people: any = [];

  constructor(public navCtrl: NavController, private prv: ConsultasProvider, menu: MenuController) {
    this.prv.holis().then((res) => {
      this.peopleArray = res;
      this.people = this.peopleArray;
      console.log("Holis promesa cumplida");
      console.log(this.peopleArray);
      console.log("Desde la promise " + this.people);
    });
    console.log("Desde el constructor " + this.people);
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
    this.peopleArray.push(p);
    // limpiar formulario
    this.name = null;
    this.username = null;
    this.email = null;
  }

  pseleccionada: Persona;
  mostrarPersona(p) {
    this.pseleccionada = p;
  }

  initializePeople(){
    this.people = this.peopleArray;
    // console.log("Desde el init" + this.people);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializePeople();
    console.log("Desde el getItems " + this.people);
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.people = this.people.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
