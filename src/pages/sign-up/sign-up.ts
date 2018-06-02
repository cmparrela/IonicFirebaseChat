import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user.provider';
import { validationMessages } from '../../validation/validation';
import { User } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth/auth.provider';

@IonicPage({
    defaultHistory: ['SignInPage']
})
@Component({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html',
})
export class SignUpPage {
    submitAttempt: boolean = false;
    signUpForm: FormGroup;
    validationMessages = validationMessages;

    constructor(
        public formBuilder: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams,
        public userProvider: UserProvider,
        public authProvider: AuthProvider
    ) {
        this.signUpForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    async createAccount() {
        this.submitAttempt = true;

        if (this.signUpForm.valid) {
            let user: User = this.signUpForm.value;

            await this.authProvider.createAuthUser(user.email, user.password);
            this.userProvider.create(user);
        }
    }

}
