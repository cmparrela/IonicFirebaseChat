import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';

import { AuthProvider } from '../providers/auth/auth.provider';
import { UserProvider } from '../providers/user/user.provider';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        authProvider: AuthProvider,
        fireAuth: AngularFireAuth,
        userProvider: UserProvider,
    ) {
        platform.ready().then(() => {

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            try {
                fireAuth.auth.onAuthStateChanged((user) => {
                    // Se usuario logado, então busca os restante dos dados dele
                    if (user) {
                        userProvider.getUserById(user.uid).subscribe((userData) => {
                            authProvider.setUserLogged(userData[0]);
                            this.rootPage = 'TabsPage';
                        })
                    } else {
                        this.rootPage = 'SignInPage';
                    }
                });
            } catch (error) {
                console.log(error);
            }

            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

