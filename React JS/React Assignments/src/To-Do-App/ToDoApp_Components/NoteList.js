import { useState } from "react";

function NoteList({ notes, setNotes }) {

  function deleteNote(index) {
    setNotes(notes.filter((_, idx) => idx !== index));
  }

  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  return (
    <>
      <h1>My Notes</h1>
      {notes.map((note, index) => (
        <div key={index}
          style={{ marginBottom: '15px' }}
        >
          <input type="text"
            value={index === editIndex ? editedText : note}
            readOnly={index === editIndex ? false : true}
            style={{ marginBottom: '10px' }}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button onClick={() => { deleteNote(index) }}>Delete</button>

          <button style={{marginLeft: '10px'}} onClick={() => {
            if (index === editIndex) {
              const updatedNotes = [...notes];
              updatedNotes[index] = editedText;
              setNotes(updatedNotes);
              setEditIndex(null);
              setEditedText("");
            }
            else {
              setEditIndex(index);
              setEditedText(notes[index]);
            }
          }}>
            {editIndex === index ? "Save" : "Edit"}
          </button>
        </div>
      ))}
    </>

  )
}

export default NoteList;