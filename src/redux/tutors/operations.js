import { createAsyncThunk } from '@reduxjs/toolkit';
import { tutorsApi } from 'api';

export const fetchTutors = createAsyncThunk(
  'tutors/fetchTutors',
  async (_, thunkApi) => {
    try {
      const response = await tutorsApi.getAll();
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTutor = createAsyncThunk(
  'tutors/addTutor',
  async (tutor, thunkApi) => {
    try {
      const response = await tutorsApi.create(tutor);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTutor = createAsyncThunk(
  'tutors/deleteTutor',
  async (tutorId, thunkApi) => {
    try {
      await tutorsApi.delete(tutorId);
      return tutorId;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
