import React from 'react'

const Note = ({ note, deleteListItem }) => {
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
                <a className="delBtn" onClick={deleteListItem}>
                    🗑️
                </a>
            </div>
        </li>
    )
}

export default Note