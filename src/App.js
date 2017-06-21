import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Main from './Main'
import base, { auth } from './base'
import SignIn from './SignIn'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {},
      currentNote: this.blankNote(),
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
      `notes/${this.state.uid}`,
      {
        context: this,
        state:'notes',
      }
    )
  }

  deleteListItem = (note)=> {
    const notes = {...this.state.notes}  
    notes[note.id] = null
    const blank = {
      id: `note-${Date.now()}`,
      title: '',
      body: '',
    }
    this.setState({ notes, currentNote: blank })
            
  }
  blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }
  
  resetCurrentNote = ()=> {
   this.selectItem(this.blankNote())
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
    // const notes={...this.state.notes}
    // notes[note.id] = note

    this.setState({currentNote: note})
  }

  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note 
    this.setState({ notes, currentNote: note })
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
          //stop syncing with Firebase
          base.removeBinding(this.ref)
          this.setState({ notes: {}, currentNote: this.blankNote() })
        }
      )
  }

  render() {
    const actions ={
      saveNote: this.saveNote,
      deleteListItem: this.deleteListItem,
    }
    return(
      <div className="App">
        {/*{ this.signedIn() ? this.renderMain() : <SignIn />}*/}
        <Switch>
          <Route path="/notes" render={() => (
            <Main 
              notes={this.state.notes}
              currentNote={this.state.currentNote} 
              {...actions}
              selectItem={this.selectItem}
              newNoteFunc={this.newNoteFunc} 
              signOut={this.signOut}
            />
          )} />
          <Route path="/sign-in" component={SignIn} />
          <Route render={() => <Redirect to="/notes" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
