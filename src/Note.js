import React from 'react'

const Note = (props) => {
    return(
        <li>
            <div className="note">
                <div className="note-title"> {props.note.title} </div>
                <div className="note-body">
                    <p>
                        {props.note.body}
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