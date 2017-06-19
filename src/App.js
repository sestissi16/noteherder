import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import base from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {},
      currentNote: {},
      uid: null,
    }
    
  }

  componentWillMount() {
    base.syncState(
      'notes',
      {
        context: this,
        state:'notes',
      }
    )
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

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (user) => {
    this.setState({ uid: user.uid })
  }

  signOut = () => {
    this.setState({ uid: null })
  }

  renderMain = () => {
    return(
      <div>
        <SignOut signOut={this.signOut} />
        <Main 
            notes={this.state.notes}
            currentNote={this.state.currentNote} 
            saveNote={this.saveNote}  
            deleteListItem={this.deleteListItem}
            selectItem={this.selectItem}
            newNoteFunc={this.newNoteFunc} 
          />
      </div>
    )
  }

  // blankNote = () => {
  //       return {
  //           id: null,
  //           title: '',
  //           body: '',
  //       }
  //   }


  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;
