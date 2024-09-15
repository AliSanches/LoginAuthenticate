import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users, UserLogin } from "./sliceUser";

import axios from "axios";

export const createUser = createAsyncThunk<Users, Users>(
  "user/register",
  async (userData) => {
    const response = await axios.post<Users>(
      "http://localhost:4000/register",
      userData
    );
    return response.data;
  }
);

export const loginUser = createAsyncThunk<UserLogin, UserLogin>(
  "userLogin/login",
  async (userDataLogin) => {
    const response = await axios.post<UserLogin>(
      "http://localhost:4000/login",
      userDataLogin
    );
    return response.data;
  }
);
