import React from 'react'
import './SignIn.css'
import { auth, githubProvider, facebookProvider } from './base'

const SignIn = () => {
    const authenticateGit = () => {
        auth
            .signInWithPopup(githubProvider)
            
        
    }
    const authenticateFace = () => {
        auth
            .signInWithPopup(facebookProvider)
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
                    onClick={authenticateGit}
                >
                    <img className="github-pic" src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="github logo"/>
                    Sign in with Github!
                </button>
                <button
                    className="SignInFacebook"
                    onClick={authenticateFace}
                >
                    <img className="facebook-pic" src="http://www.freeiconspng.com/uploads/facebook-announces-clickable-hashtags--resolution-media-17.png" alt="facebook logo" />
                    Sign in with Facebook!
                </button>
            </div>
        </div>
    )
}

export default SignIn