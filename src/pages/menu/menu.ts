import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth.provider';

@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public authProvider: AuthProvider
    ) { }

    logout() {
        this.authProvider.logout();
    }
}
