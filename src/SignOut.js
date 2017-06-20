import React from 'react'
import './SignOut.css'

const SignOut = ({ signOut }) => {
    return(
        <button 
            className="SignOutButton"
            onClick={signOut}
        >
            Sign Out
        </button>
    )
}

export default SignOut