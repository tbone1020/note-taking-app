import React from 'react';
import './note-list.css';
import NotepadStorage from '../helpers/notepad-storage';
import NotesListItem from './notes-list-item';

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    create() {
        NotepadStorage.createNewNotepad();
    }

    delete() {
        NotepadStorage.deleteCurrentNotepad();
    }

    render() {
        return(<section id="notes-list">
            <div id="notes-list-controls">
                <div onClick={this.create} className="control-action">
                    <i className="fal fa-plus"></i>
                </div>
                <div onClick={this.delete} className="control-action">
                    <i className="fal fa-trash"></i>
                </div>
            </div>
            <section id="notes-container">
                {this.props.listOfNotepads.map((notepad, index) => <NotesListItem handleMainState={this.handleMainState} key={index} notepadInfo={notepad}/>)}
            </section>
        </section>); 
    }
}

