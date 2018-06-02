import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthProvider {

    constructor(
        public angularFireAuth: AngularFireAuth
    ) { }

    createAuthUser(email, password): Promise<any> {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

}
