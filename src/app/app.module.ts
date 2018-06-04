import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { environment } from '../environments/environment';
import { AlertHelper } from '../helpers/alert.helper';
import { LoaderHelper } from '../helpers/loader.helper';
import { ToastHelper } from '../helpers/toast.helper';
import { AuthProvider } from '../providers/auth/auth.provider';
import { UserProvider } from '../providers/user/user.provider';
import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        UserProvider,
        AuthProvider,
        AngularFireAuth,
        LoaderHelper,
        ToastHelper,
        AlertHelper,
    ]
})
export class AppModule { }
