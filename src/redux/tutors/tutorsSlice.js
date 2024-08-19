//! fara asynkThunk
// import { createSlice, nanoid } from '@reduxjs/toolkit';

// * cu asynkThunk
import { createSlice } from '@reduxjs/toolkit';

import { fetchTutors, addTutor, deleteTutor } from './operations';

//! fara asynkThunk
// const initialState = {
//   tutors: [
//     {
//       id: 1,
//       firstName: 'John',
//       lastName: 'Smith',
//       phone: '+1 302-865-7394',
//       email: 'johnsmith@goit.global',
//       city: 'New York',
//       options: 'Group creation',
//       role: 'admin',
//     },
//     {
//       id: 2,
//       firstName: 'Antonio',
//       lastName: 'García',
//       phone: '+34 456 890 302',
//       email: 'antonio.garcia@goit.global',
//       city: 'Madrid',
//       options: 'Group creation, editing teacher profiles',
//       role: 'member',
//     },
//     {
//       lastName: 'Ion',
//       firstName: 'Test',
//       email: 'test@test.com',
//       phone: '123456',
//       city: 'Test',
//       id: 3,
//     },
//   ],
//   cities: [
//     {
//       id: 2,
//       name: 'San Francisco',
//     },
//   ],
//   faculties: [
//     {
//       id: 1,
//       name: 'Faculty of Computer Science',
//       description:
//         'The Faculty of Computer Science offers a wide range of computer science programs and research opportunities.',
//       history:
//         'Founded in 1985, the Faculty of Computer Science has a rich history of academic excellence.',
//     },
//     {
//       id: 2,
//       name: 'Faculty of Automation',
//       description:
//         'The Faculty of Automation specializes in automation engineering and robotics.',
//       history:
//         'Established in 1990, the Faculty of Automation has a strong tradition of innovation.',
//     },
//     {
//       id: 3,
//       name: 'Faculty of Neural Networks',
//       description:
//         'The Faculty of Neural Networks focuses on neural network research and artificial intelligence.',
//       history:
//         'Founded in 2001, the Faculty of Neural Networks is a leader in AI education and research.',
//     },
//   ],
// };

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tutorsSlice = createSlice({
  name: 'tutors',
  //! fara asynkThunk
  // initialState: initialState.tutors,

  // * cu asynkThunk
  initialState: { items: [], isLoading: false, error: null },

  //! fara asynkThunk
  // reducers: {
  //   addTutor: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(tutor) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           ...tutor,
  //         },
  //       };
  //     },
  //   },
  //   deleteTutor: {
  //     reducer(state, action) {
  //       const index = state.findIndex(tutor => tutor.id === action.payload.id);
  //       state.splice(index, 1);
  //     },
  //     prepare(tutorId) {
  //       return {
  //         payload: { id: tutorId },
  //       };
  //     },
  //   },
  // },

  // * cu asynkThunk
  extraReducers: builder => {
    builder
      .addCase(fetchTutors.pending, handlePending)
      .addCase(fetchTutors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTutors.rejected, handleRejected)

      .addCase(addTutor.pending, handlePending)
      .addCase(addTutor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTutor.rejected, handleRejected)

      .addCase(deleteTutor.pending, handlePending)
      .addCase(deleteTutor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(tutor => tutor.id !== action.payload);
      })
      .addCase(deleteTutor.rejected, handleRejected);
  },
});

// Exportăm generatoarelor de acțiuni și reducer-ul
//! fara asynkThunk
// export const { addTutor, deleteTutor } = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;
