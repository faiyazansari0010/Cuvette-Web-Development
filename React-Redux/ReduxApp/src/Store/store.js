import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../ToDoApp/Features/todoSlice";
import counterReducer from "../CounterApp/counterSlice"
import formReducer from "../FormValidation/formSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    form: formReducer
  }
}) 