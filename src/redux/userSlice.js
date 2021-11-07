import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    expiresAt: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.expiresAt = action.payload.expiresAt;
    },
    unsetUser: (state) => {
      state.id = "";
      state.username = "";
      state.firstname = "";
      state.lastname = "";
      state.expiresAt = "";
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
