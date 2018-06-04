import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { BaseProvider } from '../../core/base.provider';
import { User } from '../../models/user.model';

@Injectable()
export class UserProvider extends BaseProvider {
    private basePath = 'users';

    constructor(
        private db: AngularFireDatabase
    ) {
        super();
    }

    /**
     * Cria o usuario com o UID recebido
     * @param user 
     */
    create(user: User, uid: string): Promise<any> {
        return this.db.object(`/users/${uid}`).set(user).catch(this.handlePromiseError);
    }

    getUsers(): Observable<any[]> {
        return this.db.list(this.basePath).valueChanges().catch(this.handleObservableError);
    }

}
