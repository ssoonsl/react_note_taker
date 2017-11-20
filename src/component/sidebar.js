import React, { Component } from 'react'

const sideBar = (props) => {
  render() {
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
}
