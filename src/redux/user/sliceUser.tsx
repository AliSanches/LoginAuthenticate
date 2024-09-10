import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// representa os dados do usuario
export interface Users {
  nome: string;
  email: string;
  senha: string;
}

// representa o estado global(UserState)
export interface UserState {
  user: Users | null;
}

// representa o estado inicial
const INITIAL_STATE: UserState = {
  user: null,
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
});

export const { setUser, clearUser } = sliceUser.actions;

export default sliceUser.reducer;
