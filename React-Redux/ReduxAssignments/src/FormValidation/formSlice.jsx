import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  users: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUser:(state, action) =>{
      state.userData = {...state.userData, ...action.payload}
    },

    setUsers:(state, action) => {
      state.users = [...state.users, action.payload]
    },

    deleteUser:(state, action)=>{
      state.users = state.users.filter((item) => item.id !== action.payload)
    },

    updateUser:(state,action)=>{
      state.users = action.payload
    }
  },
});

export default formSlice.reducer;
export const {setUser, setUsers, deleteUser, updateUser} = formSlice.actions;
