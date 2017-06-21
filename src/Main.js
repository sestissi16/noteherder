import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) =>{
    
    return(
        <div className="Main">
            <Sidebar newNoteFunc={props.newNoteFunc} signOut={props.signOut} />
            <NoteList 
                notes={props.notes} 
                deleteListItem={props.deleteListItem} 
                selectItem={props.selectItem}
                currentNote={props.currentNote} 
            />
            <NoteForm 
                saveNote={props.saveNote} 
                currentNote={props.currentNote} 
            />
        </div>
    )
}

export default Main