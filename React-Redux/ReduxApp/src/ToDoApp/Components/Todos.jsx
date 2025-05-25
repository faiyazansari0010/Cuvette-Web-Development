import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../Features/todoSlice";

function Todos(){
  const todos = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  return (
    <>
      <div>My Notes</div>
      {
        todos.map((todo) =>( <>
          <li key={todo.id}>{todo.text}</li>
          <button onClick={() => dispatch(removeToDo(todo.id))}>Delete</button> </>
        ))
      }
    </>
  )
}

export default Todos;