import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: []
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload }
      state.todoList.push(newTodo);
    },

    removeToDo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    }
  }
})

export const {addToDo, removeToDo} = todoSlice.actions;
export default todoSlice.reducer;