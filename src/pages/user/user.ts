import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { User } from 'firebase/app';
import { UserProvider } from '../../providers/user/user.provider';
import { LoaderHelper } from '../../helpers/loader.helper';

@IonicPage()
@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage {
    users: Observable<User[]>

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public userProvider: UserProvider,
        public loaderHelper: LoaderHelper,
    ) {
        this.users = this.userProvider.getUsers()
    }

    chatCreate(user: User) {
        this.navCtrl.push('ChatPage', { user: user });
    }

}
