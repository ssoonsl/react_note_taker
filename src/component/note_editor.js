import React from 'react'

const NoteEditor = (props) => {
  if (!props.note) {
    return (
      <div>
        Please select a note!
      </div>
    )
  }

  return (
    <div>
      <input
        value={props.note.title}
        placeholder='Title..'
        onChange={ (event) => props.changeNoteTitle(event) }
      />
      <textarea
        value={props.note.body}
        placeholder='Record your note here..'
        onChange={ (event) => props.changeNoteBody(event) }
      />
    </div>
  )
}

export default NoteEditor
