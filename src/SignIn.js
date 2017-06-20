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
        <div className="buttons">
            <button 
                className="SignInGithub"
                onClick={authenticateGit}
            >
                Sign in with Github!
            </button>
            <button
                className="SignInFacebook"
                onClick={authenticateFace}
            >
                Sign in with Facebook!
            </button>
        </div>
    )
}

export default SignIn