import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Persona from '../../models/Persona';

/**
 * Generated class for the PersonaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-persona-detalle',
  templateUrl: 'persona-detalle.html',
})
export class PersonaDetallePage {

  @Input() p;
  //@Input() asd;
  pseleccionada : Persona;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pseleccionada = this.navParams.get("persona");
    console.log("Mostrando persona del navParams", this.pseleccionada);
  }

  ngOnChanges(){
    //console.log(asdasd);
    console.log("cambie");
    this.pseleccionada = this.p;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaDetallePage');
  }



}
