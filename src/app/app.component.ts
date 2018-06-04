import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';

import { AuthProvider } from '../providers/auth/auth.provider';

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
        fireAuth: AngularFireAuth
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.

            fireAuth.auth.onAuthStateChanged((user) => {
                if (user) {
                    // Usuario logado
                    this.rootPage = 'TabsPage';
                    authProvider.setUserLogged(user);
                } else {
                    this.rootPage = 'SignInPage';
                }
            });

            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

