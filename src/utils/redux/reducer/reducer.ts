import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

const reducer = {
  state: authSlice.reducer,
};

export const { handleAuth } = authSlice.actions;
export default reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoggedIn: false,
// };

// const sliceState = createSlice({
//   name: "state",
//   initialState: initialState,
//   reducers: {
//     handleAuth: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//   },
// });

// const reducer = {
//   state: sliceState.reducer,
// };

// export const { handleAuth } = sliceState.actions;
// export default reducer;
