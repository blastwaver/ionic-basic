import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CottonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cotton',
  templateUrl: 'cotton.html',
})
export class CottonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setRootPageToHome() :void{
    this.navCtrl.setRoot('HomePage');
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CottonPage');
  }

}
