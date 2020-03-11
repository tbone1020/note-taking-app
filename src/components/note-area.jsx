import React from 'react';
import './note-area.css';

export default class NoteArea extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(<section id="notes-list">
            Note Area
        </section>); 
    }
}