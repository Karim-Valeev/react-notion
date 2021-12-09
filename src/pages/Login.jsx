import React, {useState} from 'react';
import {auth} from "../firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

// todo Этот код не стирать, только обновлять

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        signInWithEmailAndPassword(auth, email, password)
            //todo добавить в TS проверку на тип: UserImpl
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                localStorage.setItem('userAccessToken', user.accessToken);
                // history.push("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-4 mb-4">
                <div className="row justify-content-md-center">
                    <div className="col-md-12 col-lg-5">
                        <h1 className="h2 mb-4 center top-margin-50px">Login</h1>
                        <label>Email:</label>
                        <div>
                            <input type="text" name="email" required className="form-control mb-2"
                                   placeholder="Enter email here:" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <label>Password:</label>
                        <div>
                            <input type="password" name="password" required className="form-control mb-2"
                                   placeholder="Enter password here:" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="center">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <div className="center2 top-margin-10px">
                            New to this forum? <a href="/">Create an account.</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login

// For logout
// import { getAuth, signOut } from "firebase/auth";
//
// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });