import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth/auth.provider';

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {
    messages: Array<String> = [];
    sender: User;
    recipient: User;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public authProvider: AuthProvider
    ) { }

    ionViewDidLoad() {
        this.recipient = this.navParams.get('recipientUser');
        this.sender = this.authProvider.getUserLogged;
    }

    sendMessage(newMessage: string): void {
        this.messages.push(newMessage);
    }
}
