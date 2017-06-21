import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{

    handleChanges = (ev) => {
        const note = {...this.props.currentNote}
        note[ev.target.name] = ev.target.value 
        this.props.saveNote(note)
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
                            onChange={this.handleChanges}
                            value={this.props.currentNote.title}
                        />
                    </p>
                    <p>
                        <textarea 
                            name="body" 
                            placeholder="Just start typing..."
                            onChange={this.handleChanges}
                            value={this.props.currentNote.body}
                        ></textarea>
                    </p>
                </form>
            </div>
        )
    }
}

export default NoteForm