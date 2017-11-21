import React, { Component } from 'react'
import NoteList from './note_list'
import NoteEditor from './note_editor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      selectedIndex: null
    }
  }

  addNewNote() {
    let updatedNotes = this.state.notes
    updatedNotes.push({title: `Note ${updatedNotes.length + 1}`, body: ''})
    this.setState({
      notes: updatedNotes,
      selectedIndex: updatedNotes.length - 1
    })
  }

  changeNoteTitle(event) {
    const { notes, selectedIndex } = this.state
    const updatedNote = { ...notes[selectedIndex], title: event.target.value }
    notes[selectedIndex] = updatedNote
    this.setState({
      notes: notes
    })
  }

  changeNoteBody(event) {
    const { notes, selectedIndex } = this.state
    const updatedNote = { ...notes[selectedIndex], body: event.target.value }
    notes[selectedIndex] = updatedNote
    this.setState({
      notes: notes
    })
  }

  render() {
    return(
      <div className='App'>
        <h1>Note Taker</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <NoteList
                notes={this.state.notes}
                selectedIndex={this.state.selectedIndex}
                addNewNote={ () => this.addNewNote() }
                onNoteSelect={ (selectedIndex) => this.setState({selectedIndex}) }
               />
            </div>
            <div className='col-md-8'>
              <NoteEditor
                note={this.state.notes[this.state.selectedIndex]}
                changeNoteTitle={ (event) => this.changeNoteTitle(event) }
                changeNoteBody={ (event) => this.changeNoteBody(event) }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
