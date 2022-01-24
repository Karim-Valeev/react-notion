import {
    child,
    equalTo,
    get,
    getDatabase,
    orderByChild,
    push,
    query,
    ref,
    set,
    remove,
    update,
} from 'firebase/database';
import { firebaseApp } from '../firebase/firebaseApp';
import { types } from '../constants/typeBlocks';

const db = getDatabase(firebaseApp);

class BlockDataService {
    constructor() {
        this.blocks = [];
    }

    async getBlocks(noteId) {
        const blocksRef = query(ref(db, 'blocks'), orderByChild('noteId'), equalTo(noteId));
        const value = await get(blocksRef);
        if (value.val()) {
            this.blocks = Object.entries(value.val()).map(([key, value]) => {
                return {
                    ...value,
                    id: key,
                };
            });
            return this.blocks;
        }
        return [];
    }

    async createLink(data) {
        const block = {
            noteId: data.noteId,
            author: data.author,
            linkId: data.linkId,
            type: types.LINK,
            value: data.link,
            created_at: new Date().toISOString(),
        };
        const newLinkBlockKey = push(child(ref(db), 'blocks')).key;
        await set(ref(db, 'blocks/' + newLinkBlockKey), {
            ...block,
        });
        return newLinkBlockKey;
    }

    async createText(data) {
        const block = {
            noteId: data.noteId,
            author: data.author,
            linkId: '',
            type: types.TEXT,
            value: data.text,
            created_at: new Date().toISOString(),
        };
        const newTextBlockKey = push(child(ref(db), 'blocks')).key;
        await set(ref(db, 'blocks/' + newTextBlockKey), {
            ...block,
        });
        return newTextBlockKey;
    }

    async deleteBlock(block) {
        await remove(ref(db, `/blocks/${block.id}`));
        return this.getBlocks(block.noteId);
    }

    async deleteNoteBlocks(noteId) {
        const noteBlocks = this.getBlocks(noteId);
        const updates = {};
        for (let block of noteBlocks) {
            updates[`/blocks/${block.id}`] = null;
        }
        await update(ref(db), updates);
        return noteId;
    }
}

export default new BlockDataService();
