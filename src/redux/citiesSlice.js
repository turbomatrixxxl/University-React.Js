//! fara asynkThunk
import { createSlice, nanoid } from '@reduxjs/toolkit';

//! fara asynkThunk
const initialState = JSON.parse(localStorage.getItem('cities'));

const citiesSlice = createSlice({
  name: 'cities',
  //! fara asynkThunk
  initialState: initialState ? initialState : [],

  //! fara asynkThunk
  reducers: {
    addCity: {
      reducer(state, action) {
        // console.log(action.payload);

        state.push(action.payload);
      },
      prepare(city) {
        return {
          payload: {
            id: nanoid(),
            ...city,
          },
        };
      },
    },
    deleteCity: {
      reducer(state, action) {
        const index = state.findIndex(city => city.id === action.payload.id);
        state.splice(index, 1);
      },
      prepare(cityId) {
        return {
          payload: { id: cityId },
        };
      },
    },
    editCity: {
      reducer(state, action) {
        // console.log(action.payload);

        const index = state.findIndex(city => city.id === action.payload.id.id);
        state.splice(index, 1, action.payload.id);
      },
      prepare(cityId, cityName) {
        return {
          payload: {
            id: cityId,
            name: cityName,
          },
        };
      },
    },
  },

  // * cu asynkThunk
});

// Exportăm generatoarelor de acțiuni și reducer-ul
//! fara asynkThunk
export const { addCity, deleteCity, editCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
