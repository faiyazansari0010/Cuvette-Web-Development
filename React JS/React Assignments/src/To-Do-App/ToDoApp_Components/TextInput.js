function TextInput({ inputText, setInputText, notes, setNotes }) {

  function handleAddNote() {
    if(inputText != ""){
      setNotes([...notes, inputText]);
      setInputText("")
    }    
  }
  return (
    <>
      <input type="text"
        placeholder="Add notes here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddNote} 
        style={{ marginTop: '10px', marginBottom: '20px'}}
      >
        Add Note
      </button>
    </>
  )
}

export default TextInput;