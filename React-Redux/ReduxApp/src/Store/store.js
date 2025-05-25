import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../ToDoApp/Features/todoSlice";
import counterReducer from "../CounterApp/counterSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer
  }
}) 