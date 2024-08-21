import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFaculties,
  addFaculty,
  deleteFaculty,
  editFaculty,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const facultiesSlice = createSlice({
  name: 'faculties',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchFaculties.pending, handlePending)
      .addCase(fetchFaculties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFaculties.rejected, handleRejected)

      .addCase(deleteFaculty.pending, handlePending)
      .addCase(deleteFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          faculty => faculty.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteFaculty.rejected, handleRejected)

      .addCase(addFaculty.pending, handlePending)
      .addCase(addFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addFaculty.rejected, handleRejected)

      .addCase(editFaculty.pending, handlePending)
      .addCase(editFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          faculty => faculty.id === action.payload.id
        );

        state.items.splice(index, 1, action.payload);
      })
      .addCase(editFaculty.rejected, handleRejected);
  },
});

export const facultiesReducer = facultiesSlice.reducer;
