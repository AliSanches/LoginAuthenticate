import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./UserThunk";

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

export const sliceUser = createSlice({
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

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserLoginState {
  userLogin: UserLogin | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const INITIAL_STATE_LOGIN: UserLoginState = {
  userLogin: null,
  status: "idle",
  error: null,
};

export const sliceLoginUser = createSlice({
  name: "userLogin",
  initialState: INITIAL_STATE_LOGIN,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userLogin = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export const slUser = sliceUser.reducer;
export const slLogin = sliceLoginUser.reducer;
