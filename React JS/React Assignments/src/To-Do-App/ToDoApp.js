import TextInput from './ToDoApp_Components/TextInput'
import NoteList from './ToDoApp_Components/NoteList'
import { useState } from 'react';

function ToDoApp() {

  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <>
      <TextInput
        inputText={inputText}
        setInputText={setInputText}
        notes={notes}
        setNotes={setNotes}
      />

      <NoteList
        notes={notes}
        setNotes={setNotes}
      />
    </>
  )
}

export default ToDoApp;