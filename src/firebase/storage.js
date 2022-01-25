import { getDownloadURL, getStorage, ref, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { firebaseApp } from './firebaseApp';

export const storage = getStorage(firebaseApp);

class DataStorageImages {
    upload(payload) {
        const storageRef = ref(storage, `/images/${payload.key}`);
        const uploadTask = uploadBytesResumable(storageRef, payload.value);
        uploadTask.on('state_changed', (snapshot) => {
            console.log(snapshot.state);
        });
    }

    getDownloadUrl(payload) {
        const storageRef = ref(storage, `/images/${payload.id}`);
        return getDownloadURL(storageRef);
    }

    update(payload) {
        const storageRef = ref(storage, `/images/${payload.key}`);
        deleteObject(storageRef)
            .then(() => {
                this.upload(payload);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default new DataStorageImages();
