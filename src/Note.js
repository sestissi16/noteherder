import React from 'react'

const Note = ({ note, deleteListItem }) => {
    const deleteItem = (ev) =>{
        ev.preventDefault()
        deleteListItem(note)
    }

    return(
        <li>
            <div className="note" id={note.id}>
                <div className="note-title"> 
                    {note.title} 
                </div>
                <div className="note-body">
                    <p>
                        {note.body}
                    </p>
                </div>
                <a className="delBtn" onClick={deleteItem}>
                    🗑️
                </a>
            </div>
        </li>
    )
}

export default Note