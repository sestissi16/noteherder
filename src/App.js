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

  newNoteFunc = ()=>{
    const note = {
      id: `note-${Date.now()}`,
      title: '',
      body:'',
    }
    const notes={...this.state.notes}
    notes[note.id] = note

    this.setState({notes: notes, cuurrentNote: note})
  }

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
          deleteListItem={this.deleteListItem}
          selectItem={this.selectItem}
          newNoteFunc={this.newNoteFunc} 
        />
      </div>
    );
  }
}

export default App;
