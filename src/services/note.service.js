import {firebaseApp} from "../firebase/firebaseApp";
import { getDatabase, ref, set,get, orderByChild, equalTo, query, push, child} from "firebase/database";

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

        this.noteList = Object.entries(value.val()).map(([key, value]) => {
            const dataItem = {
                ...value,
                id: key
            }
            dataItem.parentId = value.parentId === undefined ? null : value.parentId
            return dataItem
        })
        return this.noteList
    }


    create(note) {
        const newNoteKey = push(child(ref(db), 'notes')).key
        set(ref(db, 'notes/' + newNoteKey), {
            ...note
        }).then(r => console.log("SUCCESS"));
    }

    update(key, value) {
        return db.child(key).update(value);
    }

    delete(key) {
        return db.child(key).remove();
    }

    deleteAll() {
        return db.remove();
    }
}

export default new NoteDataService();