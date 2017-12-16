import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CottonPage } from './cotton';

@NgModule({
  declarations: [
    CottonPage,
  ],
  imports: [
    IonicPageModule.forChild(CottonPage),
  ],
})
export class CottonPageModule {}
