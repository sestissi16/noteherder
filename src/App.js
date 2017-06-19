import React, { Component } from 'react';
import './App.css';
import Main from './Main'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {},
      currentNote: {},
    }
    
  }
  deleteListItem = (note)=> {
    const notes = {...this.state.notes}  
    delete notes[note.id]
    this.setState({ notes })        
  }
  
  selectItem = (currentNote)=>{
    this.setState({ currentNote }, ()=>{console.log(this.state.currentNote)}) 
    
  }

  // newNote = ()=>{
    
  // }

  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note 
    this.setState({ notes, currentNote:note })
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
          currentNote={this.state.currentNote} 
          saveNote={this.saveNote} 
          blankNote={this.blankNote} 
          deleteListItem={this.deleteListItem}
          selectItem={this.selectItem} 
        />
      </div>
    );
  }
}

export default App;
