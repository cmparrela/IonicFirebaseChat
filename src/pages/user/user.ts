import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { AlertHelper } from '../../helpers/alert.helper';
import { LoaderHelper } from '../../helpers/loader.helper';
import { Chat } from '../../models/chat.model';
import { User } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { ChatProvider } from '../../providers/chat/chat.provider';
import { UserProvider } from '../../providers/user/user.provider';
import * as firebase from 'firebase';


@IonicPage()
@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage {
    users: Observable<User[]>;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public userProvider: UserProvider,
        public loaderHelper: LoaderHelper,
        public authProvider: AuthProvider,
        public chatProvider: ChatProvider,
        public alertHelper: AlertHelper,
    ) {
        this.users = this.userProvider.getAll().map((users) => {
            return users.filter(user => user.uid != this.authProvider.getUserLogged.uid)
        });
    }

    async openChat(recipientUser: User) {

        try {
            let timestamp = firebase.database.ServerValue.TIMESTAMP;

            // Cria os dois chat do usuario_logado x usuario_escolhido e usuario_escolhido x usuario_logado
            let chat = new Chat('', timestamp, recipientUser.name, '');
            this.chatProvider.create(chat, this.authProvider.getUserLogged.uid, recipientUser.uid);

            chat.title = this.authProvider.getUserLogged.name;
            this.chatProvider.create(chat, recipientUser.uid, this.authProvider.getUserLogged.uid);

            this.navCtrl.push('ChatPage', { recipientUser: recipientUser });
        } catch (error) {
            this.alertHelper.show(error);
        }
    }

}
