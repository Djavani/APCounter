import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalStorageService } from './../../app/services/localStorageService';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
  providers: [
    LocalStorageService
  ]
})
export class CounterPage {

  public valor: number;
  public valorPA : any;
  public isOrderAsc : any;
  public isDisabledButtonUp = false;
  public isDisabledButtonDown = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    this.recuperarConfig();
  }

  recuperarConfig() {
    this.storage.get('isOrderAsc').then(value => {
      this.isOrderAsc = value;

    })
    this.storage.get('valorPA').then(value => {
      if(this.isOrderAsc){
        this.valor = 0;
      }else {
        this.valor = value;
      }
      this.valorPA = value;
    })
    this.isDisabledButtonUp = false;
    this.isDisabledButtonDown = false;
  }

  usarPontoDeAcao(acao: string) {
    // crescente e subir
    if(this.isOrderAsc && acao == "up") {
      this.isDisabledButtonDown = false;
      if(this.valor < this.valorPA){
        this.valor++;
      }else {
        this.presentToast("Pontos de ação ESGOTADOS!");
        this.isDisabledButtonUp = true;
      }
    }

    //crescente e descer
    if(this.isOrderAsc && acao == "down") {
      this.isDisabledButtonUp = false;
      if(this.valor >= 1 ){
        this.valor--;
      }else {
        this.presentToast("Pontos de ação ZERADOS!");
        this.isDisabledButtonDown = true;
      }
    }

    //decrescente > descendo
    if(!this.isOrderAsc && acao == "up") {
      this.isDisabledButtonDown = false;
      if(this.valor >0){
        this.valor--;
      }else {
        this.presentToast("Pontos de ação ZERADOS!");
        this.isDisabledButtonUp = true;
      }
    }

    //decrescendo > subindo
    if(!this.isOrderAsc && acao == "down") {
      this.isDisabledButtonUp = false;
      if(this.valor < this.valorPA){
        this.valor++;
      }else {
        this.presentToast("Pontos de ação ZERADOS!");
        this.isDisabledButtonDown = true;
      }
    }

  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
