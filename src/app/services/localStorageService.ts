import { Injectable } from "@angular/core";
import { LocalActionPoint } from './../util/local-storage-actionPoint'
import { ActionPointStorage } from './../util/ActionPoint'
import { STORAGE_KEYS } from './../util/local-storage-keys-config';
import { ActionPoint } from './../model/actionPoint';

@Injectable()
export class LocalStorageService {
    
    constructor() {

    }

    getActionPoint() : LocalActionPoint {
        let actionPoint = localStorage.getItem(STORAGE_KEYS.localUserActionPoint);
        return JSON.parse(actionPoint);
    }
   
    setActionPoint(actionPoint: ActionPoint) {
        let localActionPoint = {
            actionPoint : actionPoint
        }       
        localStorage.setItem(STORAGE_KEYS.localUserActionPoint, JSON.stringify(actionPoint));
    } 
}