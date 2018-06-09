import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ConsultasProvider } from '../../providers/consultas/consultas';
import { AdminPersonasPage } from '../admin-personas/admin-personas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  HomePage: any = this;

  constructor(public navCtrl: NavController, private prv: ConsultasProvider, menu: MenuController) { }

  // ## Navigation:
  openAdminPeoplePage(){
    this.navCtrl.setRoot(AdminPersonasPage);
    // this.navCtrl.push(AdminPersonasPage);
  }

  openHomePage(){
    this.navCtrl.push(HomePage);
    // this.navCtrl.setRoot(HomePage);

  }

}
