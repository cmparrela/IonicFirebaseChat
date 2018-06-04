import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {
    messages: Array<String> = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    sendMessage(newMessage: string): void {
        this.messages.push(newMessage);
    }
}
