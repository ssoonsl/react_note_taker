import React from 'react'

const NoteEditor = ({note}) => {
  if (!note) {
    return (
      <div>
        Please select a note!
      </div>
    )
  }

  return (
    <div>
      <input
        value={note.title}
        placeholder='Title..'
      />
      <textarea
        value={note.body}
        placeholder='Content..'
      />
    </div>
  )
}

export default NoteEditor
