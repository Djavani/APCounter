import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LocalStorageService } from './../../app/services/localStorageService'
import { ActionPointStorage } from '../../app/util/ActionPoint';
import { ActionPoint } from './../../app/model/actionPoint';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
  providers: [
    LocalStorageService
  ]  
})
export class ConfigPage {
  
  /* public valorPA = null;
  public isOrderAsc: true; */

  actionPoint = new ActionPoint();
  public actionPoint2;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private storage: Storage,
  
    private storageService: LocalStorageService,
    private localStorageService : LocalStorageService) {
      this.actionPoint2 = this.localStorageService.getActionPoint()
  }

  ionViewDidLoad() {
    this.limparFiltro();
    
  }

  validarPA() {
    if(this.actionPoint2.valorPA <= 0 || this.actionPoint2.valorPA > 20) {
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
    this.actionPoint.valorPA = null;
    this.actionPoint.isOrderAsc = true;
  }

  gravarConfig(): void {  
    
    this.storageService.setActionPoint(this.actionPoint2);

    this.exibirMensagem('OK', 
    `Valores salvos com sucesso: ${this.actionPoint2.valorPA} pontos de ação,
     e ordem de exibição ${this.actionPoint2.isOrderAsc? 'crescente' : 'descrescente'}.`);
  }

}
