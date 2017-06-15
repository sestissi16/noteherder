import React, { Component } from 'react'
import './NoteList.css'

class NoteList extends Component{
    constructor(){
        super()
        this.state = {
            notes: [
                {title: 'Citizens of distant epochs', body: 'Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?',},
                {title: 'Preserve and cherish that pale blue dot', body: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!",},
                {title: 'Laws of physics', body: 'Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas',}
            ],
        }
    }
    load(){
        const notesJSON = localStorage.getItem('notes')
        const notesArray = JSON.parse(notesJSON)
        const newNotes = [...notesArray]
        const notes = [...this.state.notes]
        newNotes.map((newNote)=>{
            notes.push(newNote)
            return(notes)
        })
        this.setState({ notes }, ()=>console.log(this.state.notes))
        
    }

    deleteNote(ev){
        ev.preventDefault()
        ev.target.parentElement.parentElement.remove()
        console.log(this.state.notes)
    }
    renderListItems(note, index){
        return(
            <li key ={index}>
                <div className="note">
                    <div className="note-title"> {note.title} </div>
                    <div className="note-body">
                        <p>
                            {note.body}
                        </p>
                    </div>
                    <a className="delBtnn" onClick={this.deleteNote.bind(this)}>
                        {/*<i 
                            className="fa-trash-o"
                            aria-hidden="true"
                        >
                        </i>*/}
                        🗑️
                    </a>
                </div>
            </li>
        )
    }


    render(){
        return(
            <div className="NoteList">
                <h3>Notes</h3>
                <ul id="notes">
                    {this.load}
                    {this.state.notes.map(this.renderListItems.bind(this))}
                </ul>
            </div>
        )
    }
}

export default NoteList