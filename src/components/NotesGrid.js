import React, { useState } from "react";
import Note from "./Note";
const NotesGrid = ({notes , pushNotes, deleteNotes}) =>{
    const char = 200
    const [newNote, setNewNote] = useState('')
    let pressedKey
 /*    const pushNote = (note) => {
        let newNotes = [...notes,note]
    } */
    function handleChange(e){
        if(char - newNote.length > 0 || pressedKey === 8){
            setNewNote(e.target.value)
        }
    }
/*     function sendNote() {
        if(newNote !== '' && newNote !== ' '){
            const date = new Date()
            let note = {
                id: nanoid(),
                text: newNote,
                date: date.toLocaleDateString(),
            }
            pushNote(note)
            setNewNote('')
        }
    } */
    return(
        <>
        <div className="notes-grid">
            {
                notes.map( e =>{
                    return <Note key={e.id} id={e.id} text={e.text} date ={e.date} deleteNotes={deleteNotes}/>
                })
            }
            {/* add note start */}
            <div className="note new-note">
            <textarea rows={10}
             cols={10}
             onChange={handleChange}
             onKeyDown={(e) => pressedKey = e.keyCode}
             placeholder={'Type a note...'}
             value={newNote}></textarea>
            <div className="note-footer">
                <p>{char - newNote.length} remaining</p>
                <button onClick={() => {
                    pushNotes(newNote);
                    setNewNote('')
                    }} className="save-btn">Save</button>
            </div>
            </div>
            {/* add notes end */}
        </div>
        </>
    )
}

export default NotesGrid