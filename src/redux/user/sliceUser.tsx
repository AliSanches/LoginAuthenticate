import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./UserThunk";

//INICIO CREATE
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
//FINAL CREATE

//INICIO LOGIN
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
  reducers: {
    logout(state) {
      state.userLogin = null;
      state.status = "idle";
      state.error = null;
    },
  },
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
//FINAL LOGIN

//INICIO WELCOME
export interface UserWelcome {
  userName: string;
}

export interface UserWelcomeState {
  userWelcome: UserWelcome | any;
}

const INITIAL_SATTE_WELCOME: UserWelcomeState = {
  userWelcome: null,
};

export const sliceUserWelcome = createSlice({
  name: "userWelcome",
  initialState: INITIAL_SATTE_WELCOME,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userWelcome = action.payload;
    });
  },
});
//FINAL WELCOME

export const { logout } = sliceLoginUser.actions;
export const slUser = sliceUser.reducer;
export const slLogin = sliceLoginUser.reducer;
export const slWelcome = sliceUserWelcome.reducer;
