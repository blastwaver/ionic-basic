import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.message = this.navParams.get('message');
    alert(this.message);
  }

  navigateBack():void {
    this.navCtrl.pop();
  }

  navigateToCottonPage( ):void {
    this.navCtrl.push('CottonPage');
  }


  //life circle

  ionViewDidLoad() {
    console.log('ionViewDidLoad fired once, upon page load');
  }

  ionViewWillEnter() {
    console.log('ionViewWill Enter is Fired just as the page is about to become active')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter fired each time the page has enter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave is fired each time the page is about to leave.');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave is fired when the user has left the page.');
  }

  ionViewWillUnload() {
    console.log('ionVieWillUnload ran when the page about to be destroyed');
  }
}
