import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.model';

@Injectable()
export class UserProvider {
    private basePath = '/users';

    constructor(
        private db: AngularFireDatabase
    ) { }

    /**
     * Cria o usuario com o UID recebido
     * @param user 
     */
    create(user: User) {
        return this.db.object(`/users/${user.uid}`).set(user);
    }

    getUsers(path): Observable<any[]> {
        return this.db.list(path).valueChanges();
    }

}
