import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null }, // Set initial state as an object
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload; // Set the user object
    },
    removeUser: (state) => {
      state.user = null; // Clear the user object
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
