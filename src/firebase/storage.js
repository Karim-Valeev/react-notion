import { getStorage } from 'firebase/storage';
import { firebaseApp } from './firebaseApp';

export const storage = getStorage(firebaseApp);

// Или готовые хуки: https://github.com/csfrequency/react-firebase-hooks/tree/70cf3fc12cdc1bc7842526868eea09b329e13c77/storage

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
