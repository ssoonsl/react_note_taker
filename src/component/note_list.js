import React from 'react'

const NoteList = (props) => {
  const noteItems = props.notes.map( (note, index) => {
    return (
      <li
        onClick={ () => props.onNoteSelect(note) }
        key={index}>
        {note.title}
      </li>
    )
  })

  return (
    <div>
      <button
        onClick={() => props.addNewNote()}>
        +
      </button>
      <ul>
        {noteItems}
      </ul>

    </div>
  )
}

export default NoteList
