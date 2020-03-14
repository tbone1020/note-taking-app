import React from 'react';
import './notes-list-item.css';

export default class NoteListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    switchCurrentNotepad(notepadId) {
        // console.log(this.props);
    }

    render() {
        const { id, title, date, text } = this.props.notepadInfo;
        return (<article onClick={() => this.switchCurrentNotepad(id)} id={`notepad_${id}`} className="notepad-item">
            <div className="notepad-item-wrapper">
                <h2 className="notepad-item-header">{ title }</h2>
                <h4 className="notepad-item-date">{ date }</h4>
                <p className="notepad-item-text">{ text }</p>
            </div>
        </article>);
    }
}
