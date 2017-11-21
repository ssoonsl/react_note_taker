import React, { Component } from 'react'
import NoteList from './note_list'
import NoteEditor from './note_editor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      selectedNote: null
    }
  }

  addNewNote () {
    let updatedNotes = this.state.notes
    updatedNotes.push({title: `Note ${updatedNotes.length + 1}`, body: ''})
    this.setState({
      notes: updatedNotes,
      selectedNote: updatedNotes[-1]
    })
  }

  render() {
    return(
      <div className='App'>
        <h1>Note Taker</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <NoteList
                notes={this.state.notes}
                addNewNote={() => this.addNewNote()}
                onNoteSelect={ (selectedNote) => this.setState({selectedNote}) }
               />
            </div>
            <div className='col-md-9'>
              <NoteEditor
                note={this.state.selectedNote}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
