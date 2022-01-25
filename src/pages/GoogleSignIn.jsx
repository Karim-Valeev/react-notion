import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useHistory } from 'react-router-dom';

const provider = new GoogleAuthProvider();

// По сути это и авторизация, и аутентификация
function GoogleSignIn() {
    const history = useHistory();

    const handleSubmit = (event) => {
        signInWithPopup(auth, provider)
            .then(() => {
                history.push('/');
            })
            .catch((error) => {
                console.error(error);
            });
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="button-9">
                Register with Google account
            </button>
        </form>
    );
}


export default GoogleSignIn;
