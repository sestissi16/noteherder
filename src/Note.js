import React from 'react'

const Note = ({ note, deleteListItem, selectItem }) => {
    const deleteItem = (ev) =>{
        ev.preventDefault()
        deleteListItem(note)
    }
    const handleSelect = (ev) =>{
        ev.preventDefault()
        selectItem(note)
    }

    return(
        <li onClick={handleSelect}>
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
                    <span role="img" aria-label>🗑️</span>
                </a>
            </div>
        </li>
    )
}

export default Note