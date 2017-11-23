import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import NoteList from './note_list'
import NoteEditor from './note_editor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      selectedIndex: null,
      notesCreated: null
    }
  }

  addNewNote () {
    let updatedNotes = this.state.notes.slice()
    let notesCreated = this.state.notesCreated
    notesCreated++
    updatedNotes.push({title: `Note ${notesCreated}`, body: ''})
    this.setState({
      notes: updatedNotes,
      selectedIndex: updatedNotes.length - 1,
      notesCreated: notesCreated
    })
  }

  changeNoteTitle (event) {
    const { notes, selectedIndex } = this.state
    const updatedNote = { ...notes[selectedIndex], title: event.target.value }
    notes[selectedIndex] = updatedNote
    this.setState({
      notes: notes
    })
  }

  changeNoteBody (event) {
    const { notes, selectedIndex } = this.state
    const updatedNote = { ...notes[selectedIndex], body: event.target.value }
    notes[selectedIndex] = updatedNote
    this.setState({
      notes: notes
    })
  }

  deleteNote (index) {
    const updatedNotes = this.state.notes.slice()
    updatedNotes.splice(index, 1)
    console.log(index)
    this.setState({
      notes: updatedNotes
    })
  }

  render() {
    return(
      <Router>
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
                  deleteNote={ (el) => this.deleteNote(el) }
                 />
              </div>
              <div className='col-md-8'>
                <Route exact={true} path='/' render={ () => (
                  <div>
                    <h1>Welcome to the note taking app!</h1>
                    <NoteEditor
                      note={this.state.notes[this.state.selectedIndex]}
                      changeNoteTitle={ (event) => this.changeNoteTitle(event) }
                      changeNoteBody={ (event) => this.changeNoteBody(event) }
                    />
                  </div>
                )} />
                <Route path='/notes/:noteId' component={NoteEditor}/>

                <NoteEditor
                  note={this.state.notes[this.state.selectedIndex]}
                  changeNoteTitle={ (event) => this.changeNoteTitle(event) }
                  changeNoteBody={ (event) => this.changeNoteBody(event) }
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
