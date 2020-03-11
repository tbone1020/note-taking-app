export default class NotepadStorage {

    static saveCurrentNotepad() {
        
    }
    async bounce() {
        
    }

    static deleteCurrentNotepad() {
        console.log("Deleting...");
    }

    static createNewNotepad() {
        // let notepadCount = this.getNotepadIDCount();
        // let newNotepad = JSON.stringify({
        //     id: notepadCount,
        //     title: "Notepad",
        //     date: this.getTodaysDate(),
        //     bodyText: ""
        // });
    }
 
   
    static getNotepadIDCount() {
        if (!window.localStorage.getItem('count')) {
            window.localStorage.setItem('count', 1);
        } else {
            return window.localStorage.getItem('count');
        }
    }

    getTodaysDate() {
        let date = new Date();
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    static grabAllNotepads() {
        
    }

    static getNotepadById(notepadId) {

    }
}