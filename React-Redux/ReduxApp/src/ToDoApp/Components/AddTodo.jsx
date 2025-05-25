import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Features/todoSlice";

function AddTodo() {

  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e){
    e.preventDefault();
    dispatch(addToDo(inputText));
    setinputText("");
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
