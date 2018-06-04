import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, LoadingController, NavController } from 'ionic-angular';

import { BasePage } from '../../core/base.page';
import { AlertHelper } from '../../helpers/alert.helper';
import { LoaderHelper } from '../../helpers/loader.helper';
import { AuthProvider } from '../../providers/auth/auth.provider';

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
        public alertHelper: AlertHelper,
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public loaderHelper: LoaderHelper,
        public authProvider: AuthProvider
    ) {
        super();
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        })
    }

    async login() {
        this.loaderHelper.show();
        try {
            this.submitAttempt = true;

            if (this.signInForm.valid) {
                await this.authProvider.signIn(this.signInForm.value.email, this.signInForm.value.password)
                console.log('logado com sucesso');
            }
        } catch (error) {
            this.alertHelper.show(error);
        }
        this.loaderHelper.close();
    }

    goToSignUp() {
        this.navCtrl.push('SignUpPage');
    }
}