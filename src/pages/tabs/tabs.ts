import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    chatRoot = 'ChatPage'
    userRoot = 'UserPage'
    menuRoot = 'MenuPage'

    constructor(public navCtrl: NavController) { }
}