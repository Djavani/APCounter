import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
})
export class CounterPage {

  public valorPA = null;
  public isOrderAsc: true;

  constructor(  
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {    
    this.storage.get('valorPA').then((val) => {
      this.valorPA = val;
    });
    this.storage.get('isOrderAsc').then((val) => {
      this.isOrderAsc = val;
    });

  }

}
