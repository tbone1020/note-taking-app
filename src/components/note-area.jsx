import React from 'react';
import './note-area.css';

export default class NoteArea extends React.Component {
    constructor(props) {
        super(props);
        
    }

    saveAfterTime() {
        
    }

    handleFormChange(event) {
        
    }

    render() {
        console.log(`this.props ----------------- `);
        console.log(this.props);
        const {title, body} = this.props;
        return(<section id="notepad-area">
            <input onChange={() => this.handleFormChange()} defaultValue={title} type="text" id="notepad-header"/>
            <textarea name="note-area" id="notepad-body" onChange={() => this.handleFormChange()}></textarea>
        </section>); 
    }
}

// NoteArea.defaultProps = {
//     title: th,
//     body: ""
// }