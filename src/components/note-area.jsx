import React from 'react';
import './note-area.css';

class NoteArea extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(<section id="notes-list">
            List of Notes
        </section>); 
    }
}

export default NoteArea;