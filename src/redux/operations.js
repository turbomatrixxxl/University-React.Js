import { createAsyncThunk } from '@reduxjs/toolkit';
import { facultiesApi, tutorsApi } from 'api';

export const fetchTutors = createAsyncThunk(
  'tutors/fetchTutors',
  async (_, thunkApi) => {
    try {
      const response = await tutorsApi.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFaculties = createAsyncThunk(
  'faculties/fetchFaculties',
  async (_, thunkApi) => {
    try {
      const response = await facultiesApi.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFaculty = createAsyncThunk(
  'faculties/deleteFaculty',
  async (facultyId, thunkApi) => {
    try {
      const response = await facultiesApi.delete(facultyId);
      // console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFaculty = createAsyncThunk(
  'faculties/addFaculty',
  async (faculty, thunkApi) => {
    try {
      const response = await facultiesApi.create(faculty);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editFaculty = createAsyncThunk(
  'faculties/editFaculty',
  async (faculty, thunkApi) => {
    try {
      const response = await facultiesApi.update(faculty.id, faculty);
      // console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
