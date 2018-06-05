import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { BaseProvider } from '../../core/base.provider';
import { Chat } from '../../models/chat.model';
import { ItemSliding } from 'ionic-angular';

@Injectable()
export class ChatProvider extends BaseProvider {

    constructor(
        private db: AngularFireDatabase
    ) {
        super()
    }

    /**
     * Cria o chat entre dois usuarios
     */
    create(chat: Chat, userId1: string, userId2: string) {
        return this.db.object(`/chats/${userId1}/${userId2}`)
            .set(chat)
            .catch(this.handlePromiseError);
    }

    /**
    * Retorna todos os chats
    */
    getByUser(userId): Observable<any[]> {
        return this.db.list(`chats/${userId}`, ref => ref.orderByChild('timestamp'))
            .snapshotChanges()
            .map(actions =>
                actions.map(a => ({ key: a.key, ...a.payload.val() }))
            ).catch(this.handleObservableError);
    }

}
