import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png" alt="Amazon Logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"/>

                    
                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login__signInButton">Sign In</button>

                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale. Please see our Privacy Notic, our Cookies Notice and our Interest-Based Ads Notice</p>

                    <button className="login__registerButton">Create an Amazon Account </button>
                </form>
            </div>
        </div>
    )
}

export default Login
