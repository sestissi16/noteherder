import React from 'react'

const Note = ({ note }) => {
    return(
        <li>
            <div className="note">
                <div className="note-title"> 
                    {note.title} 
                </div>
                <div className="note-body">
                    <p>
                        {note.body}
                    </p>
                </div>
                <a className="delBtnn" /*onClick={this.deleteNote.bind(this)}*/>
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

export default Note