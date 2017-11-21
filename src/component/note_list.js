import React from 'react'

const NoteList = (props) => {
  const noteItems = props.notes.map( (note, index) => {
    return (
      <li
        onClick={ () => props.onNoteSelect(index) }
        key={index}
        style={
          index === props.selectedIndex
          ? {fontWeight: 'bold'}
          : {fontWeight: 'normal'}
        }>
        {note.title}
      </li>
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
