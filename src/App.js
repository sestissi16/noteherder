import React, { Component } from 'react';
import './App.css';
import Main from './Main'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {}
    }
    
  }
  deleteListItem = (note)=> {
        const notes = {...this.state.notes}  
        delete notes[note.id]
        this.setState({ notes })  
         
  }
  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note 
    this.setState({ notes })
  }

  blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }


  render() {
    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          saveNote={this.saveNote} 
          blankNote={this.blankNote} 
          deleteListItem={this.deleteListItem} 
        />
      </div>
    );
  }
}

export default App;
