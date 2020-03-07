import React from 'react';
import './note-list.css';
import NotepadStorage from '../helpers/notepad-storage';

class NoteList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    create() {
        NotepadStorage.createNewNotepad();
    }

    delete() {
        NotepadStorage.deleteCurrentNotepad();
    }

    render() {
        return(<section id="notes-list">
            <div className="notes-list-controls">
                <div onClick={this.create} className="control-action">
                    <i className="fal fa-plus"></i>
                </div>
                <div onClick={this.delete} className="control-action">
                    <i className="fal fa-trash"></i>
                </div>
            </div>
        </section>); 
    }
}

export default NoteList;