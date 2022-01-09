import {firebaseApp} from "../firebase/firebaseApp";
import {child, equalTo, get, getDatabase, orderByChild, push, query, ref, set, remove} from "firebase/database";
import { flattenNote, nest} from "../utils/changeState";

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
        this.noteList = []
    }

    async getAll() {
        const notesRef = query(ref(db, '/notes/'))
        const value = await get(notesRef)
        this.noteList = Object.entries(value.val()).map(([key, value]) => {return {...value, id: key}})
        return this.noteList
    }

    async getNote(uid) {
        const notesRef = query(ref(db, `notes`), ...[orderByChild('author'), equalTo(uid)])
        const value = await get(notesRef)

        if (value.val()) {
            this.noteList = Object.entries(value.val()).map(([key, value]) => {
                const dataItem = {
                    ...value,
                    id: key
                }
                dataItem.parentId = value.parentId === undefined ? null : value.parentId
                return dataItem
            })
            return nest(this.noteList)
        }
        return []
    }


    async create(note) {
        const newNoteKey = push(child(ref(db), 'notes')).key
        await set(ref(db, 'notes/' + newNoteKey), {
            ...note
        })
        return this.getNote(note.author)
    }

    update(key, value) {
        return db.child(key).update(value);
    }

    async delete(note) {
        const deleteNotes = flattenNote(note)
        for (let item of deleteNotes) {
            await remove(ref(db, `/notes/${item.id}`))
        }
        return this.getNote(deleteNotes[0].author)
    }

    deleteAll() {
        return db.remove();
    }
}

export default new NoteDataService();