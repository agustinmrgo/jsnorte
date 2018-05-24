import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPersonasPage } from './admin-personas';

@NgModule({
  declarations: [
    AdminPersonasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminPersonasPage),
  ],
})
export class AdminPersonasPageModule {}
