import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoaderHelper } from '../../helpers/loader.helper';
import { BasePage } from '../../core/base.page';


@IonicPage()
@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage extends BasePage {
    submitAttempt: boolean = false;
    signInForm: FormGroup;

    constructor(
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public loaderHelper: LoaderHelper
    ) {
        super();
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        })
    }

    login() {
        this.loaderHelper.show();
        try {
            this.submitAttempt = true;

            if (this.signInForm.valid) {
                console.log('ok');
            }
        } catch (error) {
            let alert = this.alertCtrl.create({
                subTitle: error,
                buttons: ['OK']
            });
            alert.present();
        }
        this.loaderHelper.close();

        console.log('fim');

    }

    goToSignUp() {
        this.navCtrl.push('SignUpPage');
    }

    goToResetPassword() {
        // this.navCtrl.push(ResetPasswordPage);
    }
}