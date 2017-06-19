import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) =>{
    const handleClick = (ev) => {
        ev.preventDefault()
        this.setState({ note: props.blankNote})
    }
    return(
        <div className="Main">
            <Sidebar handleClick={handleClick} />
            <NoteList notes={props.notes} deleteListItem={props.deleteListItem} />
            <NoteForm saveNote={props.saveNote}  />
        </div>
    )
}

export default Main