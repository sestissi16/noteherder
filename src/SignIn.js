import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider, facebookProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="div-container">
      <div className="SignInPage">
        <h1 className="welcome">Welcome to <span>Noteherder</span></h1>
        <h3 className="solgan"><span>Where we round up all of those pesky notes!</span></h3>
        <button
          className="SignIn"
          onClick={() => authenticate(githubProvider)}
        >
          Sign in with GitHub
        </button>
        <button
          className="SignIn"
          onClick={() => authenticate(googleProvider)}
        >
          Sign in with Google
        </button>
        <button
          className="SignIn"
          onClick={() => authenticate(facebookProvider)}
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  )
}

export default SignIn