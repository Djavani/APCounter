import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  
  public singleValue = 0;
  public saturation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
    console.log('singleValue', this.singleValue);
    console.log('saturaion', this.saturation);
  }

  exibeValor() {
    console.log(this.saturation);
    
  }

}
