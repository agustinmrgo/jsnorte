import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonaDetallePage } from './persona-detalle';

@NgModule({
  declarations: [
    PersonaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonaDetallePage),
  ],
})
export class PersonaDetallePageModule {}
