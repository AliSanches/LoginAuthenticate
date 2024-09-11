import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
}

// representa o estado inicial
const INITIAL_STATE: UserState = {
  user: null,
  status: "idle",
};

const sliceUser = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, action: PayloadAction<Users>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<Users>) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        console.error("Falha ao criar usuário:", action.error.message);
      });
  },
});

export const { setUser, clearUser } = sliceUser.actions;

export default sliceUser.reducer;
