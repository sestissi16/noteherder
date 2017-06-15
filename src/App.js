import React, { Component } from 'react';
import './App.css';
import Main from './Main'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title:'Thoughts on React',
          body: 'React is prett nifty. Declaratice FTW!'
        },
        'note-2': {
          id: 'note-2',
          title:'State and props?',
          body:'Wat',
        },
      },
    }
  }

  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note 
    this.setState({ notes })
  }


  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote} />
      </div>
    );
  }
}

export default App;
