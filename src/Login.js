import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.scss';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // firebase login auth here
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => console.warn(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        // firebase register here
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log('Successfully created new user ', {auth});
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => console.warn(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png" alt="Amazon Logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale. Please see our Privacy Notic, our Cookies Notice and our Interest-Based Ads Notice</p>

                    <button onClick={register} className="login__registerButton">Create an Amazon Account </button>
                </form>
            </div>
        </div>
    )
}

export default Login
