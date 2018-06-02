import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderHelper {
    loader: Loading;

    constructor(
        public loadingCtrl: LoadingController
    ) { }

    show(message: string = null) {
        if (!this.loader) {
            this.loader = this.loadingCtrl.create({
                content: message || 'Loading...',
            });
            this.loader.present();
        }
    }

    close() {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    }

}
