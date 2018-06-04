import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { UserProvider } from '../../providers/user/user.provider';
import { LoaderHelper } from '../../helpers/loader.helper';
import { User } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth/auth.provider';

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
    ) {
        this.users = this.userProvider.getUsers().map((users) => {
            return users.filter(user => user.uid != this.authProvider.getUserLogged().uid)
        });
    }

    chatCreate(user: User) {
        this.navCtrl.push('ChatPage', { user: user });
    }

}
