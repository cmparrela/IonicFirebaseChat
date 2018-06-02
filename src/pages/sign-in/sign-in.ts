import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {

    public loginForm: any;

    constructor(
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public navCtrl: NavController

    ) { }

    login() {
        const loading = this.loadingCtrl.create({
            duration: 500
        });

        loading.onDidDismiss(() => {
            const alert = this.alertCtrl.create({
                title: 'Logged in!',
                subTitle: 'Thanks for logging in.',
                buttons: ['Dismiss']
            });
            alert.present();
        });

        loading.present();

    }

    goToSignUp() {
        this.navCtrl.push('SignUpPage');
    }

    goToResetPassword() {
        // this.navCtrl.push(ResetPasswordPage);
    }
}