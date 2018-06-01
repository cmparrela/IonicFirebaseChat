import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { FirebaseAppConfig, AngularFireModule } from "angularfire2";

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCHQaH3ryXkPIMg-z0chT77hFKoO16j8GA",
    authDomain: "udemy-curso-chat.firebaseapp.com",
    databaseURL: "https://udemy-curso-chat.firebaseio.com",
    projectId: "udemy-curso-chat",
    storageBucket: "udemy-curso-chat.appspot.com",
    messagingSenderId: "369076819731"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseAppConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
