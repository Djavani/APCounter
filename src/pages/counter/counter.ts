import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalStorageService } from './../../app/services/localStorageService';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
  providers: [
    LocalStorageService
  ]
})
export class CounterPage {

  public valorPA : any;
  public isOrderAsc : any;

  constructor(  
    public navCtrl: NavController, 
    public navParams: NavParams,    
    private storageService: LocalStorageService,
    private storage: Storage) {

      this.getOrderAsc();
      this.getValorPA();
  }

  ionViewDidLoad() { 
    this.getOrderAsc();
    this.getValorPA();
  }

  getValorPA(){        
    this.storage.get('valorPA').then(value => {
      this.valorPA = value;
    })
    
  }
  
  getOrderAsc() {  
    this.storage.get('isOrderAsc').then(value => {
    this.isOrderAsc = value
    })
   
  }

}
