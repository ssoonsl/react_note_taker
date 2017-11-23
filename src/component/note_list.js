import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const NoteList = (props) => {
  const noteItems = props.notes.map( (note, index) => {
    return (
      <Link to={`/notes/${index}`}>
        <li
          onClick={ (event) => {
            console.log(event)
            props.onNoteSelect(index)
          }}
           key={index}
          style={
            index === props.selectedIndex ? {fontWeight: 'bold'} : null
          }>
          {note.title}
          <button
            onClick={ () => props.deleteNote(index) }
            key={index}
            >
              X
            </button>
        </li>
      </Link>
    )
  })

  return (
    <div>
      <button
        onClick={ () => props.addNewNote() }>
        +
      </button>
      <ul>
        {noteItems}
      </ul>

    </div>
  )
}

export default NoteList
