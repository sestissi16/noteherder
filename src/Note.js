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
                    <button className="delBtn" onClick={deleteItem}>
                        🗑️
                    </button>
                </div>
            </li>
        </a>
    )
}

export default Note