import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertHelper {

    constructor(
        public alertCtrl: AlertController,
    ) { }

    show(message: string = null) {
        let alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }


}
