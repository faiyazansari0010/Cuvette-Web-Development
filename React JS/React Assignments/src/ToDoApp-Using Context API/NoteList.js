function NoteList({ todos, dispatch }) {
  function toggleUpdate(idx) {
    dispatch({ type: "TOGGLE_UPDATE", payload: { id: idx } });
  }
  function deleteNote(idx) {
    dispatch({ type: "DELETE_NOTE", payload: { id: idx } });
  }
  return (
    <>
    <h1>My Notes</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="text"
            value={todo.note}
            key={todo.id}
            readOnly={todo.readOnly}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_NOTE",
                payload: { id: todo.id, note: e.target.value },
              });
            }}
            style={{marginBottom:"10px", marginTop:"30px"}}
          />
          <button onClick={() => deleteNote(todo.id)}>Delete</button>
          <button onClick={() => toggleUpdate(todo.id)}>
            {todo.readOnly === true ? "Update" : "Save"}
          </button>
        </div>
      ))}
    </>
  );
}

export default NoteList;
