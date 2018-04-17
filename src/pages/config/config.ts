import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocalStorageService } from '../../app/services/localStorageService'

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  
  public valorPA : any;
  public isOrderAsc : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private storageService : LocalStorageService,
    private storage: Storage) { }

  ionViewDidLoad() {    
    this.limparFiltro();
    this.recuperarConfig();    
  }

  validarPA() {    
    if(this.valorPA <= 0 || this.valorPA > 20) {
      this.exibirMensagem('Atenção', 'Escolha um valor de 1 até 20 para os pontos de ação')
      //this.limparFiltro();      
    }else {
      this.gravarConfig();
    }
    
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

  gravarConfig() {  
    
    this.storageService.setValorPA(this.valorPA);
    this.storageService.setOrderAsc(this.isOrderAsc);

    this.exibirMensagem('OK', 
    `Valores salvos com sucesso: ${this.valorPA} pontos de ação,
     e ordem de exibição ${this.isOrderAsc? 'crescente' : 'descrescente'}.`);
  }

  recuperarConfig() {
    this.getValorPA()
    this.getOrderAsc();
    
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
