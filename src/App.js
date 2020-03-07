import React from 'react';
import './App.css';
import NoteList from './components/note-list/note-list';
import NoteArea from './components/note-area';
import NotesListItem from './components/note-list/notes-list-item';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
        listOfNotePads: [],
        storage: window.localStorage
    };
  }
  componentDidUpdate() {
    console.log("Update happened");
  }

  componentDidMount() {
    let notepads = Object.values(this.state.storage);
    const listOfNotepadComponents = notepads.map((notepad, index) => {
        const parsedNotepad = JSON.parse(notepad);
        return <NotesListItem key={index} notepad={parsedNotepad}/>
    });
    this.setState({
        listOfNotePads: listOfNotepadComponents
    }, () => {});
}

  render() {
    return (
      <main role="main">
        <NoteList />
        <NoteArea />
      </main>
    );
  }
}
