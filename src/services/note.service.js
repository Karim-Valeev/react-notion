import {firebaseApp} from "../firebase/firebaseApp";
import { getDatabase, ref, set } from "firebase/database";
import login from "../pages/Login";

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
        this.noteIdCount=1
    }

    getAll() {
        return db;
    }

    create(note) {
        set(ref(db, 'notes/' + this.noteIdCount), {
            title: note.title,
            author: note.author,
            text: note.text,
            url: 'http://localhost:8080',
            parentId: null
        }).then(r => console.log("SUCCESS"));
        this.noteIdCount++;
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