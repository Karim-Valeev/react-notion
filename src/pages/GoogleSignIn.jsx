import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useHistory } from 'react-router-dom';

// todo Этот код не стирать, только обновлять
const provider = new GoogleAuthProvider();

// по сути и регистрация и авторизация

function GoogleSignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const handleSubmit = (event) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                localStorage.setItem('userAccessToken', token);
                const user = result.user;
                localStorage.setItem('uid', user.uid);
                history.push('/');
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">
                Register with Google account
            </button>
        </form>
    );
}

export default GoogleSignIn;
