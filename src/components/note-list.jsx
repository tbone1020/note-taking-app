import React from 'react';
import './note-list.css';

class NoteList extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(<section id="notes-list">
            <i class="fal fa-plus"></i>
            List of Notes
        </section>); 
    }
}

export default NoteList;