import React, { Component } from 'react'

const Editor = (props) => {
  if (!props.activeNote) {
    return (
      <div>
        Please select a note!
      </div>
    )
  } else {
    return (
      <div>
        <input
          value={props.activeNote.title}
          placeholder='Title..'
        />
        <textarea
          value={props.activeNote.content}
          placeholder='Content..'
        />
      </div>
    )
  }
}

export default Editor
