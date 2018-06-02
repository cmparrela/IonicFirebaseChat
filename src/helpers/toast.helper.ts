import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastHelper {

    constructor(
        public toastCtrl: ToastController,
    ) { }

    show(message: string, cssClass?: string, position?: string) {
        const toast = this.toastCtrl.create({
            message: message,
            duration: 2500,
            showCloseButton: true,
            closeButtonText: "OK",
            cssClass: cssClass || "",
            position: position || 'top'
        });
        toast.present();
    }
}
