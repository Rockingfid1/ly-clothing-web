import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    isAdmin: false,
    isConfirmed: false,
  },
  reducers: {
    setAuth(state, action) {
      const { payload } = action;
      switch (payload.type) {
        case "login":
          console.log("logged in!");
          return {
            ...state,
            isLoggedIn: true,
          };
        case "logout":
          return {
            ...state,
            isLoggedIn: false,
          };
        default:
          return state;
      }
    },
    setAdminAuth(state, action) {
      const { payload } = action;
      switch (payload.type) {
        case "setAdmin":
          return {
            ...state,
            isAdmin: true,
          };
        case "removeAdmin":
          return {
            ...state,
            isAdmin: false,
          };
        default:
          return state;
      }
    },
  },
});

export const { setAuth, setAdminAuth } = authSlice.actions;

export default authSlice.reducer;
