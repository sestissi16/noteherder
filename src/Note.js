import React from 'react'
import { NavLink } from 'react-router-dom'

const Note = ({ note, removeNote, currentNote }) => {

  const handleRemove = (ev) => {
    removeNote(currentNote)
  }

  return (
    <NavLink to={`/notes/${note.id}`}>
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
          <div className="delete-button">
            <button
              className="del-btn"
              type="button"
              onClick={handleRemove}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </li>
    </NavLink>
  )
}

export default Note