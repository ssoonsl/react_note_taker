import React, { Component } from 'react'
import sideBar from './sidebar'
import Editor from './editor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteList: [],
      activeNoteIndex: ''
    }
  }

  render() {
    return(
      <div className='App'>
        <h1>Simple Note Taker</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <sideBar
                noteList={this.state.noteList}
                activeNoteIndex={this.state.activeNoteIndex}
               />
            </div>
            <div className='col-md-9'>
              <Editor
                activeNote={this.state.noteList[this.state.activeNoteIndex]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
