import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/auth";
import { useHistory } from "react-router-dom";

// todo Этот код не стирать, только обновлять

function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleSubmit = (event) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem('userAccessToken', user.accessToken);
                history.push("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-4 mb-4">
                <div className="row justify-content-md-center">
                    <div className="col-md-12 col-lg-5">
                        <h1 className="h2 mb-4 center top-margin-50px">Register:</h1>
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
                                Create an account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration
