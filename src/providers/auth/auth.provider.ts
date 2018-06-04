import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { BaseProvider } from '../../core/base.provider';

@Injectable()
export class AuthProvider extends BaseProvider {

    constructor(
        public fireAuth: AngularFireAuth
    ) {
        super();
    }

    get authenticated(): boolean {
        return this.currentUser() ? true : false;
    }

    createAuthUser(email, password): Promise<any> {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).catch(this.handlePromiseError);
    }

    signIn(email: string, password: string) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password).catch(this.handlePromiseError);
    }

    logout() {
        this.fireAuth.auth.signOut().catch(this.handlePromiseError);
    }

    currentUser() {
        return this.fireAuth.auth.onAuthStateChanged;

    }

}
