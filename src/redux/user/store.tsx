import { configureStore } from "@reduxjs/toolkit";
import { slUser, slLogin, slWelcome } from "./sliceUser";

const store = configureStore({
  reducer: {
    users: slUser,
    login: slLogin,
    welcome: slWelcome,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
