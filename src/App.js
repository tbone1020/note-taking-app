import React from 'react';
import './App.css';
import NoteList from './components/note-list';
import NoteArea from './components/note-area';
import NotesListItem from './components/notes-list-item';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      notepadCount: 0,
      listOfNotePads: [],
      currentActiveNotepad: 0,
    };
  }

  handleMainState(obj) {
   this.setState(obj); 
  }

  componentDidMount() {
    this.setNotepadCount();
    this.setNotepadList();
  }

  setNotepadCount() {
    let notepadCount = window.localStorage.getItem('count');
    if (notepadCount === null) {
      this.updateCountIfNotepadsExist();
    }
  }

  updateCountIfNotepadsExist() {
    let notepadsList = JSON.parse(window.localStorage.getItem('notepads'));
    if (notepadsList) {
      let totalNotepads = notepadsList.length;
      let newID = notepadsList[totalNotepads - 1].id + 1;
      this.setState({ notepadCount: newID }, () => window.localStorage.setItem('count', newID));
    }
  }

  setNotepadList() {
    let listOfNotepads = JSON.parse(window.localStorage.getItem('notepads'));
    console.log("List of listOfNotepads -----------")
    console.log(listOfNotepads)
    if (listOfNotepads) {
      this.setState({
        listOfNotePads: listOfNotepads,
      })
    }
  }

  render() {
    const { notepadCount, listOfNotePads, currentActiveNotepad } = this.state;
    return (
      <main role="main">
        <section id="notepad-wrapper">
          <NoteList count={notepadCount} listOfNotepads={listOfNotePads}/>
          {/* <NoteArea handleMainState={this.handleMainState} {...listOfNotePads[currentActiveNotepad]} /> */}
        </section>
      </main>
    );
  }
}
