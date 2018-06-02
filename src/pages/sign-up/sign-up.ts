import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoaderHelper } from '../../helpers/loader.helper';
import { ToastHelper } from '../../helpers/toast.helper';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { UserProvider } from '../../providers/user/user.provider';
import { BasePage } from '../../core/base.page';

@IonicPage({
    defaultHistory: ['SignInPage']
})
@Component({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html',
})
export class SignUpPage extends BasePage {
    submitAttempt: boolean = false;
    signUpForm: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams,
        public userProvider: UserProvider,
        public authProvider: AuthProvider,
        public loaderHelper: LoaderHelper,
        public toastHelper: ToastHelper,
        public alertCtrl: AlertController
    ) {
        super();
        this.signUpForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    async createAccount() {
        this.loaderHelper.show();
        try {
            this.submitAttempt = true;

            if (this.signUpForm.valid) {
                let formUser = this.signUpForm.value;

                // Cadastra o usuario na area de autenticacao
                let authState = await this.authProvider.createAuthUser(formUser.email, formUser.password);

                // Cadastra o usuario no banco de dados
                delete formUser.password;
                formUser.uid = authState.uid;
                await this.userProvider.create(formUser);
            }
            this.toastHelper.show('User created successfully')
            this.navCtrl.pop();

        } catch (error) {
            let alert = this.alertCtrl.create({
                subTitle: error,
                buttons: ['OK']
            });
            alert.present();
        }
        this.loaderHelper.close();
    }

}
