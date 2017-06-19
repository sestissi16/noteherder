import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import base, { auth } from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {},
      currentNote: null,
      uid: null,
    }
    
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          //finished signing in
          this.authHandler(user)
        }
        else{
          //finished signing out
          this.setState({ uid: null})
        }
      }
    )
  }

  syncNotes = () => {
    this.ref = base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state:'notes',
      }
    )
  }

  deleteListItem = (note)=> {
    const notes = {...this.state.notes}  
    notes[note.id] = null
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
    this.setState(
      { uid: user.uid }, 
      this.syncNotes
    )
  }

  signOut = () => {
    auth
      .signOut()
      .then(
        () => {
          base.removeBinding(this.ref)
          this.setState({ notes: {} })
        }
      )
  }

  renderMain = () => {
    const actions ={
      saveNote: this.saveNote,
      deleteListItem: this.deleteListItem,
    }
    return(
      <div>
        <SignOut signOut={this.signOut} />
        <Main 
            notes={this.state.notes}
            currentNote={this.state.currentNote} 
            {...actions}
            selectItem={this.selectItem}
            newNoteFunc={this.newNoteFunc} 
          />
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn />}
      </div>
    );
  }
}

export default App;
