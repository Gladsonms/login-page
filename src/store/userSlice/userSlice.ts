import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserFromLocalStorage: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { login, logout, setUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;
