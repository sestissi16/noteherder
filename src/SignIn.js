import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider, facebookProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div>
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
  )
}

export default SignIn