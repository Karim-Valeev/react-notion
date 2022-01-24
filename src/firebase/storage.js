import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
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
}

export default new DataStorageImages();

// UPLOAD EXAMPLE:
// import {useState} from 'react';
// import { storage } from '../firebase/storage';
// function App() {
// const [image , setImage] = useState('');
// const upload = ()=>{
//   if(image == null)
//     return;
//   storage.ref(`/images/${image.name}`).put(image)
//   .on("state_changed" , alert("success") , alert);
// }
//
//   return (
//     <div className="App">
//       <center>
//       <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
//       <button onClick={upload}>Upload</button>
//       </center>
//     </div>
//   );
// }
//
// export default App;

// USE EXAMPLE:

// import { storage } from '../firebase/storage';
// import { ref, getDownloadURL } from "firebase/storage";

// getDownloadURL(ref(storage, 'images/image_2019-07-24_14-03-56.png'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'
//     console.log(url)
//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();
//
//     // Or inserted into an <img> element
//     const img = document.getElementById('myimg');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });
