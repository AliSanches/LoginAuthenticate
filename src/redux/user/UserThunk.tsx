import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "./sliceUser";

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
