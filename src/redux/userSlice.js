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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
