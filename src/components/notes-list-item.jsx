import React from 'react';
import './notes-list-item.css';

export default function NoteListItem(props) {
    const { id, title, date, text } = props.notepadInfo;
    return (<article className="notepad-item">
        <div className="notepad-item-wrapper">
            <h2 className="notepad-item-header">{ title }</h2>
            <h4 className="notepad-item-date">{ date }</h4>
            <p className="notepad-item-text">{ text }</p>
        </div>
    </article>);
}