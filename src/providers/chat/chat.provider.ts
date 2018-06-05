import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { BaseProvider } from '../../core/base.provider';
import { Chat } from '../../models/chat.model';

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
        console.log('criando ', userId1, userId2);
        
        return this.db.object(`/chats/${userId1}/${userId2}`)
            .set(chat)
            .catch(this.handlePromiseError);
    }

}
