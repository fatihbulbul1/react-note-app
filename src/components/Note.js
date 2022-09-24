import React from "react";
const Note = ({id,text,date,deleteNotes}) =>{
    const idNote = id
    return(
        <div className="note">
            <p className="text">{text}</p>
            <div className="note-footer">
                <p className="date">{date}</p>
                <i onClick={() => deleteNotes(idNote)} className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export default Note