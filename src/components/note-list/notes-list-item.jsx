import React from 'react';
import './notes-list-item.css';

export default function NoteListItem(props) {
    
    const { title, date, textBody } = props.notepad;
    return (<article className="notepad-item">
        <div className="notepad-item-wrapper">
            <h2 className="notepad-item-header">{ title }</h2>
            <h4 className="notepad-item-date">{ date }</h4>
            <p className="notepad-item-text">{ textBody }</p>
        </div>
    </article>);
}