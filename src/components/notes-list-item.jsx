import React from 'react';
import './notes-list-item.css';

export default class NoteListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    switchCurrentNotepad(id) {
        this.props.updateMainState({
            currentActiveNotepad: id
        });
    }

    render() {
        const { id, title, date, text } = this.props.notepadInfo;
        return (<article onClick={() => this.switchCurrentNotepad(id - 1)} id={`notepad_${id}`} className="notepad-item">
            <div className="notepad-item-wrapper">
                <h2 className="notepad-item-header">{ title }</h2>
                <h4 className="notepad-item-date">{ date }</h4>
                <p className="notepad-item-text">{ text }</p>
            </div>
        </article>);
    }
}
