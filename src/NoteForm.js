import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
    componentWillReceiveProps(nextProps){
        const newId = nextProps.match.params.id
        
        if (newId !== this.props.currentNote.id){
            const note = nextProps.notes[newId]
            if (note) {
                this.props.selectItem(note)
            }
        }
    }

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