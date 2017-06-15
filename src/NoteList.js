import React, { Component } from 'react'
import './NoteList.css'

class NoteList extends Component{
    deleteNote(ev){
        ev.preventDefault()
        ev.target.parentElement.parentElement.remove()

    }
    render(){
        return(
            <div className="NoteList">
                <h3>Notes</h3>
                <ul id="notes">
                    <li>
                        <div className="note">
                            <div className="note-title">
                                Citizens of distant epochs
                            </div>
                            <div className="note-body">
                                <p>
                                    Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?
                                </p>
                            </div>
                            <button className="warning button" onClick={this.deleteNote.bind(this)}>
                                {/*<i 
                                    className="fa-trash-o"
                                    aria-hidden="true"
                                >
                                </i>*/}
                                🗑️
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="note">
                            <div className="note-title">Preserve and cherish that pale blue dot </div>
                            <div className="note-body">
                                <p>
                                    network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!
                                </p>
                            </div>
                            <button className="warning button" onClick={this.deleteNote.bind(this)}>
                                {/*<i 
                                    className="fa-trash-o"
                                    aria-hidden="true"
                                >
                                </i>*/}
                                🗑️
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="note">
                            <div className="note-title">Laws of physics</div>
                            <div className="note-body">
                                <p>
                                    Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas
                                </p>
                            </div>
                            <button className="warning button" onClick={this.deleteNote.bind(this)}>
                                {/*<i 
                                    className="fa-trash-o"
                                    aria-hidden="true"
                                >
                                </i>*/}
                                🗑️
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NoteList