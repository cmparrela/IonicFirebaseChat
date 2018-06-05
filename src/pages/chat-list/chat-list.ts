import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { AlertHelper } from '../../helpers/alert.helper';
import { Chat } from '../../models/chat.model';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { ChatProvider } from '../../providers/chat/chat.provider';
import { UserProvider } from '../../providers/user/user.provider';
import { User } from '../../models/user.model';

@IonicPage()
@Component({
    selector: 'page-chat-list',
    templateUrl: 'chat-list.html',
})
export class ChatListPage {
    chats: Observable<Chat[]>;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public chatProvider: ChatProvider,
        public authProvider: AuthProvider,
        public alertHelper: AlertHelper,
        public userProvider: UserProvider,
    ) { }

    ionViewDidLoad() {
        try {
            this.chats = this.chatProvider.getByUser(this.authProvider.getUserLogged.uid)
        } catch (error) {
            this.alertHelper.show(error);
        }
    }

    openChat(chat: Chat) {
        this.userProvider.getUserById(chat.key).subscribe((result) => {
            const user: User = result[0];

            this.navCtrl.push('ChatPage', { recipientUser: user });
        })


    }


}
