import {firebaseApp} from "../firebase/firebaseApp";
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase(firebaseApp)
class UserDataService {
    getAll() {
        return ref(db,"/users")
    }

    get(uid) {
        return ref(db,`/users/${uid}`)
    }
}

export default new UserDataService()