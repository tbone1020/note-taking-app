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
      currentActiveNotepad: null,
      localStorage: window.localStorage
    };
  }

  componentDidMount() {
    this.setNotepadCount();
    this.setNotepadList();
  }

  setNotepadCount() {
    let notepadCount = this.state.localStorage.getItem('count');
    if (notepadCount === null) {
      this.updateCountIfNotepadsExist();
    }
  }

  updateCountIfNotepadsExist() {
    let notepadsList = this.state.localStorage.getItem('notepads');
    if (notepadsList) {
      let parsedNotepadList = JSON.parse(notepadsList);
      let totalNotepads = parsedNotepadList.length;
      let newID = parsedNotepadList[totalNotepads - 1].id + 1;
      this.setState({ notepadCount: newID }, () => {
        this.state.localStorage.setItem('count', newID);
      });
    }
  }

  setNotepadList() {
    let listOfNotepads = JSON.parse(this.state.localStorage.getItem('notepads'));
    if (listOfNotepads) {
      const listOfNotepadComponents = listOfNotepads.map((notepad, index) => <NotesListItem key={index} notepadInfo={notepad}/>);
      this.setState({
        listOfNotePads: listOfNotepadComponents,
        currentActiveNotepad: listOfNotepads[0]
      })
    }
  }

  render() {
    return (
      <main role="main">
        <section id="notepad-wrapper">
          <NoteList count={this.state.notepadCount} listOfNotepads={this.state.listOfNotePads}/>
          <NoteArea {...this.state.currentActiveNotepad} />
        </section>
      </main>
    );
  }
}
