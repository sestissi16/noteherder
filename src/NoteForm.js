import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            body: '',
            notes: [],
        }
        this.saveNote = this.saveNote.bind(this)
        this.updateNoteTitle = this.updateNoteTitle.bind(this)
        this.updateNoteBody = this.updateNoteBody.bind(this)
    }
    updateNoteTitle(ev){
        this.setState({
            title: ev.target.value
        })

    }
    updateNoteBody(ev){
        this.setState({
            body: ev.target.value
        })
    }
    saveNote(ev){
        ev.preventDefault()
        const note = {
            title: this.state.title,
            body: this.state.body
        }
        const state = {...this.state}
        state.notes.push(note)
        state.title = ''
        state.body = ''
        this.setState(state)
        localStorage
            .setItem('notes', JSON.stringify(this.state.notes))
    }

    render(){
        return(
            <div className="NoteForm">
                <form>
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            value={this.state.title}
                            onChange={this.updateNoteTitle}
                        />
                    </p>
                    <p>
                        <textarea 
                            name="body" 
                            cols="30" 
                            rows="10" 
                            placeholder="Just start typing..."
                            value={this.state.body}
                            onChange={this.updateNoteBody}
                        ></textarea>
                    </p>
                    <button onClick={this.saveNote} className="button">Save form</button>
                </form>
            </div>
        )
    }
}

export default NoteForm