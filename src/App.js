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
    const notepads = JSON.stringify([{
      id: 1,
      date: "3/11/2020",
      title: "Notepad Title 1",
      text: "Text For Notepad Number 1"
    }, {
      id: 2,
      date: "3/28/2020",
      title: "Notepad Title 2",
      text: "Text For Notepad Number 2"
    }, {
      id: 3,
      date: "10/20/2020",
      title: "Notepad Title 3",
      text: "Text For Notepad Number 3"
    }]);
    // window.localStorage.setItem('notepads', notepads)
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
