import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { BaseProvider } from '../../core/base.provider';
import { User } from '../../models/user.model';

@Injectable()
export class UserProvider extends BaseProvider {
    constructor(
        private db: AngularFireDatabase
    ) {
        super();
    }

    /**
     * Cria o usuario com o UID recebido
     * @param user 
     */
    create(user: User): Promise<any> {
        return this.db.object(`/users/${user.uid}`)
            .set(user)
            .catch(this.handlePromiseError);
    }

    /**
     * Retorna todos os usuarios cadastrados
     */
    getUsers(): Observable<any[]> {
        return this.db.list('users', ref => ref.orderByChild('name'))
            .valueChanges()
            .catch(this.handleObservableError);
    }

    /**
     * Retorna o usuário pelo ID
     */
    getUserById(uid) {
        return this.db.list('users', ref => ref.orderByChild('uid').equalTo(uid))
            .valueChanges()
            .first()
            .catch(this.handleObservableError);
    }

}
