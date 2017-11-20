import React, { Component } from 'react'

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
              Sidebar
            </div>
            <div className='col-md-9'>
              Note Editor
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
