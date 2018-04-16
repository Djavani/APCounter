import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalStorageService } from './../../app/services/localStorageService';
import { ActionPointStorage } from '../../app/util/ActionPoint';
import { ActionPoint } from './../../app/model/actionPoint';

@IonicPage()
@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
  providers: [
    LocalStorageService
  ]
})
export class CounterPage {

  public actionPoint;

  constructor(  
    public navCtrl: NavController, 
    public navParams: NavParams,    
    private localStorageService : LocalStorageService) {
      this.actionPoint = this.localStorageService.getActionPoint()
  }

  ionViewDidLoad() {   
    
    
  }

}
