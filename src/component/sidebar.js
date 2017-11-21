import React, { Component } from 'react'

const NotesList = (props) => {
  return (
    <div>
      <ul>
        {this.renderNotes(this.props.noteList)}
      </ul>
      <button className='btn btn-primary'
        onClick={() => this.props.addNewNote()}>
        +
      </button>
    </div>
  )
}

export default sideBar
