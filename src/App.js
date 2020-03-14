import React from 'react';
import './App.css';
import NoteList from './components/note-list';
import NoteArea from './components/note-area';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      notepadCount: 0,
      listOfNotePads: [],
      currentActiveNotepad: 0,
    };
    this.updateMainState = this.updateMainState.bind(this);
  }

  updateMainState(updatedStateObject) {
    if (this.state.currentActiveNotepad !== updatedStateObject.currentActiveNotepad) {
      console.log("Updating State");
      this.setState(updatedStateObject);
    } else {
      console.log("Not Updating State");
    }
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
          <NoteList updateMainState={this.updateMainState} count={notepadCount} listOfNotepads={listOfNotePads}/>
          <NoteArea updateMainState={this.updateMainState} {...listOfNotePads[currentActiveNotepad]} />
        </section>
      </main>
    );
  }
}
