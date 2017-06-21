import React from 'react'
import './SignIn.css'
import { auth, githubProvider, facebookProvider, googleProvider } from './base'

const SignIn = () => {
    const authenticate = (provider) => {
        auth
            .signInWithPopup(provider)
    }

    return(
        <div className="SignInPage">
            <div className="Header">
                <h1><strong>Welcome to Noteherder!</strong></h1>
                <h3>Where we round up all of those pesky lose notes!</h3>
            </div>
            <div className="buttons">
                <button 
                    className="SignInGithub"
                    onClick={() => authenticate(githubProvider)}
                >
                    <img className="github-pic" src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="github logo"/>
                    Sign in with Github!
                </button>
                <button
                    className="SignInFacebook"
                    onClick={() => authenticate(facebookProvider)}
                >
                    <img className="facebook-pic" src="http://www.freeiconspng.com/uploads/facebook-announces-clickable-hashtags--resolution-media-17.png" alt="facebook logo" />
                    Sign in with Facebook!
                </button>
                <button
                    className="SignInGoogle"
                    onClick={() => authenticate(googleProvider)}
                >
                    Sign in with Google!
                </button>
            </div>
        </div>
    )
}

export default SignIn