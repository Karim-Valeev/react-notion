import {child, equalTo, get, getDatabase, orderByChild, push, query, ref, set} from "firebase/database";
import {firebaseApp} from "../firebase/firebaseApp";

const db = getDatabase(firebaseApp);


class BlockDataService {
    constructor() {
        this.blocks = []
    }

    async getBlocks (noteId) {
        const blocksRef = query(ref(db, 'blocks'), ...[orderByChild('noteId'), equalTo(noteId)])
        const value = await get(blocksRef);
        if (value.val()) {
            this.blocks = Object.entries(value.val()).map(([key, value]) => {
                return {
                    ...value,
                    id: key,
                };
            });
            return this.blocks
        }
        return []
    }

    async createLink (data) {
        const block = {
            noteId: data.note.id,
            author: data.uid,
            linkId: data.linkId,
            type: 'link',
            value: data.link,
            created_at: new Date().toISOString()
        }
        const newNoteKey = push(child(ref(db), 'blocks')).key;
        await set(ref(db, 'blocks/' + newNoteKey), {
            ...block,
        });
        return newNoteKey
    }
}

export default new BlockDataService()