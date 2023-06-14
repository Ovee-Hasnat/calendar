import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = userSlice.actions;

export default userSlice.reducer;
