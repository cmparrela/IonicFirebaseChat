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

    createAuthUser(email, password): Promise<any> {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).catch(this.handlePromiseError);
    }

}
