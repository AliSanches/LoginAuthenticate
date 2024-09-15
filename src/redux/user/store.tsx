import { configureStore } from "@reduxjs/toolkit";
import { slUser, slLogin } from "./sliceUser";

const store = configureStore({
  reducer: {
    users: slUser,
    login: slLogin,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
