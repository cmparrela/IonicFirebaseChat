import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    chatRoot = 'ChatListPage'
    userRoot = 'UserPage'
    menuRoot = 'MenuPage'

    constructor(public navCtrl: NavController) { }
}
