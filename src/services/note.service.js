import {firebaseApp} from "../firebase/firebaseApp";
import { getDatabase, ref, set, onValue } from "firebase/database";

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
        this.noteList = []
    }

    getAll() {
        const notesRef = ref(db, '/notes/')
        onValue(notesRef, (snapshot) => {
            const data = snapshot.val()
            this.noteList = Object.entries(data).map(([key, value]) => {return {...value, id: key}})
            console.log(this.noteList)
        })
        console.log(this.noteList)
        return this.noteList
    }


    create(note) {
        this.noteIdCount++;
        set(ref(db, 'notes/' + this.noteIdCount), {
            title: note.title,
            author: note.author,
            text: note.text,
            url: 'http://localhost:8080',
            parentId: null
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