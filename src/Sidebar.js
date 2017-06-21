import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'
import SignOut from './SignOut'

const Sidebar = ({ signOut }) =>{
    // const handleClick = (ev) => {
    //     ev.preventDefault()
    //     newNoteFunc()
    // }
    return(
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>
            <div className="SignOutBtn">
                <SignOut signOut={signOut}/>
            </div>
            <Link to="/notes">
                <button className="new-note">
                    <img src={newHover} alt="New note" />
                    <img className="outline" src={newIcon} alt="New note" />
                </button>
            </Link>
        </nav>
    )
}

export default Sidebar