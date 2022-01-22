import {firebaseApp} from "../firebase/firebaseApp";
import { getDatabase, ref} from "firebase/database";
const db = getDatabase(firebaseApp)

// todo возможно удалить
class UserDataService {
    getAll() {
        return ref(db,"/users")
    }

    get(uid) {
        return ref(db,`/users/${uid}`)
    }
}

export default new UserDataService()