import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
            
            <Switch>
                <Route path="/notes/:id" render={(navProps) => (
                    <NoteForm 
                        saveNote={props.saveNote} 
                        currentNote={props.currentNote} 
                    />
                )} />
                <Route path="/notes" render={(navProps) => (
                    <NoteForm 
                        saveNote={props.saveNote} 
                        currentNote={props.currentNote} 
                    />
                )} />
            </Switch>
        </div>
    )
}

export default Main