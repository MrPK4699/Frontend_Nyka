// redux/actions/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { register as registerAPI, login as loginAPI } from '../../api/auth';

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerAPI(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await loginAPI(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});
