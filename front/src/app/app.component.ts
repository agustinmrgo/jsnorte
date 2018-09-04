<<<<<<< HEAD
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
=======
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
>>>>>>> 0b66b10a400be88a5347a986f4dd374729bc2bd7
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdminPersonasPage } from "../pages/admin-personas/admin-personas";
import { PersonaDetallePage } from "../pages/persona-detalle/persona-detalle";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;
<<<<<<< HEAD
  menuCtrl: MenuController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, menu: MenuController) {
=======
  
  pages: Array<{title: string, component: any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
>>>>>>> 0b66b10a400be88a5347a986f4dd374729bc2bd7
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'AdminPeople', component: AdminPersonasPage }
      // { title: 'PersonDetail', component: PersonaDetallePage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

<<<<<<< HEAD
  ionViewDidEnter() {
    this.menuCtrl.enable(true, "menuputo");
  }

=======
>>>>>>> 0b66b10a400be88a5347a986f4dd374729bc2bd7
}

