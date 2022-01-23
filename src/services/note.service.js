import { firebaseApp } from '../firebase/firebaseApp';
import {
    child,
    equalTo,
    get,
    getDatabase,
    orderByChild,
    push,
    query,
    ref,
    remove,
    set,
    update,
} from 'firebase/database';
import { flattenNote, nest } from '../utils/changeState';

const db = getDatabase(firebaseApp);
// Strcit Db rule:
// These rules grant access to a node matching the authenticated
// user's ID from the Firebase auth token
// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }

class NoteDataService {
    //todo get id counters https://firebase.google.com/docs/firestore/solutions/counters#web
    constructor() {
        this.noteList = [];
    }

    async getAll() {
        const notesRef = query(ref(db, '/notes/'));
        const value = await get(notesRef);
        this.noteList = Object.entries(value.val()).map(([key, value]) => {
            return { ...value, id: key };
        });
        return this.noteList;
    }

    async getNotes(uid) {
        const notesRef = query(ref(db, `notes`), ...[orderByChild('author'), equalTo(uid)]);
        const value = await get(notesRef);

        if (value.val()) {
            this.noteList = Object.entries(value.val()).map(([key, value]) => {
                const dataItem = {
                    ...value,
                    id: key,
                };
                dataItem.parentId = value.parentId === undefined ? null : value.parentId;
                return dataItem;
            });
            return nest(this.noteList);
        }
        return [];
    }

    async getNote(id) {
        const noteRef = ref(db, `/notes/${id}`);
        const value = await get(noteRef);
        if (value.val()) {
            return { ...value.val(), id };
        }
        return null;
    }

    async create(note) {
        const newNoteKey = push(child(ref(db), 'notes')).key;
        await set(ref(db, 'notes/' + newNoteKey), {
            ...note,
        });
        return this.getNotes(note.author);
    }

    async updateTitle(data, id) {
        const updates = {};
        updates[`/notes/${id}/title`] = data.title;
        await update(ref(db), updates);
        return this.getNote(id);
    }

    async delete(note) {
        const deleteNotes = flattenNote(note);
        for (let item of deleteNotes) {
            await remove(ref(db, `/notes/${item.id}`));
        }
        return this.getNotes(deleteNotes[0].author);
    }

    deleteAll() {
        return db.remove();
    }
}

export default new NoteDataService();
