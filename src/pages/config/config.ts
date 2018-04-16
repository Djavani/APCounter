import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  
  public valorPA = null;
  public isOrderAsc: true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    this.limparFiltro();
  }

  validarPA() {
    if(this.valorPA <= 0 || this.valorPA > 20) {
      this.exibirMensagem('Atenção', 'Escolha um valor de 1 até 20 para os pontos de ação')
      this.limparFiltro();
    }
    this.gravarConfig();
    
  }

  exibirMensagem(titulo: string, subtitulo: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ['Ok']
    });
    alert.present();
  }

  limparFiltro(): void {
    this.valorPA = null;
    this.isOrderAsc = true;
  }

  gravarConfig(): void {    
    // set a key/value
    this.storage.set('valorPA', this.valorPA);
    this.storage.set('isOrderAsc', this.isOrderAsc);

    // Or to get a key/value pair
    this.storage.get('valorPA').then((val) => {
      //console.log('Valor gravado para PA: ', val);
    });

    this.storage.get('isOrderAsc').then((val) => {
      //console.log('Ordenar Crescente ? ', val);
    });

    this.exibirMensagem('OK', 
    `Valores salvos com sucesso: ${this.valorPA} pontos de ação,
     e ordem de exibição ${this.isOrderAsc? 'crescente' : 'descrescente'}.`);
  }

}
