import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../Features/todoSlice";
import { addToDo } from "../Features/todoSlice";
import { useState } from "react";

function AddTodo() {
  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e) {
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

function Todos() {
  const todos = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  return (
    <>
      <div>My Notes</div>
      {todos.map((todo) => (
        <>
          <li key={todo.id}>{todo.text}</li>
          <button onClick={() => dispatch(removeToDo(todo.id))}>
            Delete
          </button>{" "}
        </>
      ))}

      <AddTodo />
    </>
  );
}

export default Todos;
