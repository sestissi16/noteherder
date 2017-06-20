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
        <a onClick={handleSelect}>
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
                    <div className="note-button">
                        <button className="delBtn" onClick={deleteItem}>
                            <span role="img" aria-label="delete">🗑️</span>
                        </button>
                    </div>
                </div>
            </li>
        </a>
    )
}

export default Note