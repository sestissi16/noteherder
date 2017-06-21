import React from 'react'
import './SignOut.css'

const SignOut = ({ signOut }) => {
    return(
        // <div className="SignOutDiv">
            <button 
                className="SignOutButton"
                onClick={signOut}
            >
                Sign Out
            </button>
        // </div>
    )
}

export default SignOut