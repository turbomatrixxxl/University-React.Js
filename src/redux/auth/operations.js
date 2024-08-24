import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',

  async (user, thunkApi) => {
    try {
      const response = await axios.post('users/signup', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    const response = await axios.post('users/login', user);
    setAuthHeader(response.data.token);
    // console.log(response.data);

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkApi) => {
    try {
      axios.defaults.baseURL = 'https://connections-api.goit.global/';

      const response = await axios.post('/users/logout');
      console.log(response.data);
      setAuthHeader('');

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
