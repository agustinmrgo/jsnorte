import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonaDetallePage } from '../pages/persona-detalle/persona-detalle'
import { ConsultasProvider } from '../providers/consultas/consultas';
import { AdminPersonasPage } from '../pages/admin-personas/admin-personas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonaDetallePage,
    AdminPersonasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonaDetallePage,
    AdminPersonasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultasProvider
  ]
})
export class AppModule {}
