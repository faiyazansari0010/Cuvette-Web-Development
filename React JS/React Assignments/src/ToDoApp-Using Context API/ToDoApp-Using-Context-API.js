import { useReducer, useState } from "react";
import NoteList from "./NoteList";

function ToDoApp_Using_Context_API() {
  const [inputNote, setInputNote] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function reducer(todos, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return [
          ...todos,
          { note: action.payload.note, id: todos.length, readOnly: true },
        ];

      case "UPDATE_NOTE":
        return todos.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, note: action.payload.note }
            : todo;
        });

      case "TOGGLE_UPDATE":
        return todos.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, readOnly: !todo.readOnly }
            : todo;
        });

      case "DELETE_NOTE":
        return todos.filter((todo) => todo.id !== action.payload.id);

      default:
        return todos;
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter note here..."
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
      />
      <button
        onClick={() => {
          if (inputNote != "") {
            dispatch({ type: "ADD_NOTE", payload: { note: inputNote } });
          }
          setInputNote("");
        }}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        Add Note
      </button>
      <NoteList todos={todos} dispatch={dispatch} />
    </>
  );
}

export default ToDoApp_Using_Context_API;
