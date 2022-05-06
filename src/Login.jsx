import React, { useState } from 'react'
import logo from "./images/LinkedIn-Logos/LI-Logo.png"
import { auth } from "./firebase.js";
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice'

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                console.log(userAuth.user);
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profilePic: userAuth.user.photoURL
                }))
            }).catch(error => {
                alert(error)
            })
    };
    const register = () => {
        if (!name) {
            alert('Please enter a full name');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {

                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
            }).catch((error) => { alert(error) })
    }

    return (
        <div className='login'>
            <img src={logo} alt="" />
            <form action="">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder='Full name(required if registering)'
                />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type="text"
                    placeholder='Profile pic URL (optional)'
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='Email' />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password' />
                <button onClick={loginToApp}>Sign in</button>

            </form>
            <p>Not a member?  <span onClick={register} className='login_register'>Register now</span></p>
        </div>
    )
}

export default Login
