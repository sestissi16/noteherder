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
        <h1 className="welcome">Welcome to </h1>
        <h1 className="welcome-title"><span>Noteherder</span></h1>
        {/* <h3 className="solgan"><span>Where we round up all of those pesky notes!</span></h3> */}
        <div className="button-container">
          <button
            className="SignInGithub"
            onClick={() => authenticate(githubProvider)}
          >
            <img className="logos" src="http://www.freeiconspng.com/uploads/github-logo-icon-30.png" alt="github logo" />
            Sign in with GitHub
          </button>
          <button
            className="SignInGoogle"
            onClick={() => authenticate(googleProvider)}
          >
            <img className="logos" src="https://maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png" alt="google logo" />
            Sign in with Google
          </button>
          <button
            className="SignInFacebook"
            onClick={() => authenticate(facebookProvider)}
          >
            <img className="logos" src="http://www.freeiconspng.com/uploads/facebook-transparent-pics-18.png" alt="facebook logo" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn