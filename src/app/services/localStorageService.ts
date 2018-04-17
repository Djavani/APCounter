import { Injectable } from "@angular/core";
import { ActionPoint } from './../model/actionPoint';
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LocalStorageService {
    
    constructor(private storage: Storage) { }

    getValorPA() {
        //let valorPa: string;
        this.storage.get('valorPA').then(value => {
            //valorPa = value;            
            //console.log('valorPA:', value);            
            return value
        })        
    }
   
    setValorPA(valorPA: string) {
        this.storage.set('valorPA', valorPA )
    }
    
    getOrderAsc() {
        this.storage.get('isOrderAsc').then(value => {
            console.log('isOrderAsc:', value);
            //return value;
        })
    }

    setOrderAsc(isOrderAsc: boolean) {
        this.storage.set('isOrderAsc', isOrderAsc);
    }

    clearStorage() {
        this.storage.clear().then(() => {
            
        })
    }
}