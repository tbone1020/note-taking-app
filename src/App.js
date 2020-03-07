import React from 'react';
import './App.css';
import NoteList from './components/note-list';
import NoteArea from './components/note-area';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {};
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
