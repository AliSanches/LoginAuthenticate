import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./UserThunk";

// representa os dados do usuario
export interface Users {
  name: string;
  email: string;
  password: string;
}

// representa o estado global(UserState)
export interface UserState {
  user: Users | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

// representa o estado inicial
const INITIAL_STATE: UserState = {
  user: null,
  status: "idle",
  error: null,
};

const sliceUser = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export default sliceUser.reducer;
