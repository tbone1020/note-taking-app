import React from 'react';
import './note-area.css';

export default class NoteArea extends React.Component {
    constructor(props) {
        super(props);
    }

    saveAfterTime() {
        
    }

    render() {
        const {title, body} = this.props;
        return(<section id="notepad-area">
            <h1 className="notepad-header">{title}</h1>
            <p className="notepad-body">{body}</p>
        </section>); 
    }
}

NoteArea.defaultProps = {
    title: "Notepad",
    body: ""
}