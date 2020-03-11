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
      localStorage: window.localStorage
    };
  }

  componentDidMount() {
    // let lastNotepadEntered = JSON.parse(window.localStorage.getItem('notepads'))[1].id;
    const dataStructure = {
      count: 0,
      notepads: [{
        id: "notepad-1",
        date: "3/9/2020",
        titel: "notepad title 1",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
      },{
        id: "notepad-2",
        date: "3/9/2020",
        titel: "notepad title 2",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
      }]
    };
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
      let nextIDNumber = parsedNotepadList[totalNotepads - 1].id + 1;
      this.setState({ notepadCount: nextIDNumber }, () => {
        this.state.localStorage.setItem('count', nextIDNumber);
      });
    }
  }

  setNotepadList() {
    let listOfNotepads = JSON.parse(this.state.localStorage.getItem('notepads'));
    if (listOfNotepads) {
      const listOfNotepadComponents = listOfNotepads.map((notepad, index) => {
        console.log(notepad);
        return <NotesListItem key={index} notepadInfo={notepad}/>
      });
      console.log(listOfNotepadComponents)
    }

    // this.setState({
    //     listOfNotePads: listOfNotepadComponents
    // }, () => {});
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
