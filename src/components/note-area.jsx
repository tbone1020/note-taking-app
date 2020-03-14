import React from 'react';
import './note-area.css';

export default class NoteArea extends React.Component {
    constructor(props) {
        super(props);
    }

    saveAfterTime() {
        
    }

    handleFormChange(event) {
        console.log(event.target.value)
    }

    render() {
        const {title, text} = this.props;
        return(<section id="notepad-area">
            <input name="note-header" id="notepad-header" defaultValue={title} type="text" onChange={this.handleFormChange}/>
            <textarea name="note-area" id="notepad-body" defaultValue={text} onChange={this.handleFormChange}></textarea>
        </section>); 
    }
}

// NoteArea.defaultProps = {
//     title: th,
//     body: ""
// }