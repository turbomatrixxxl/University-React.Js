import { createReducer } from '@reduxjs/toolkit';
import { addTutor, deleteTutor } from './actions';

const initialState = {
  tutors: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      phone: '+1 302-865-7394',
      email: 'johnsmith@goit.global',
      city: 'New York',
      options: 'Group creation',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'Antonio',
      lastName: 'García',
      phone: '+34 456 890 302',
      email: 'antonio.garcia@goit.global',
      city: 'Madrid',
      options: 'Group creation, editing teacher profiles',
      role: 'member',
    },
    {
      lastName: 'Ion',
      firstName: 'Test',
      email: 'test@test.com',
      phone: '123456',
      city: 'Test',
      id: 3,
    },
  ],
  cities: [
    {
      id: 2,
      name: 'San Francisco',
    },
  ],
  faculties: [
    {
      id: 1,
      name: 'Faculty of Computer Science',
      description:
        'The Faculty of Computer Science offers a wide range of computer science programs and research opportunities.',
      history:
        'Founded in 1985, the Faculty of Computer Science has a rich history of academic excellence.',
    },
    {
      id: 2,
      name: 'Faculty of Automation',
      description:
        'The Faculty of Automation specializes in automation engineering and robotics.',
      history:
        'Established in 1990, the Faculty of Automation has a strong tradition of innovation.',
    },
    {
      id: 3,
      name: 'Faculty of Neural Networks',
      description:
        'The Faculty of Neural Networks focuses on neural network research and artificial intelligence.',
      history:
        'Founded in 2001, the Faculty of Neural Networks is a leader in AI education and research.',
    },
  ],
};

// fara toolkit
// export const tutorsReducer = (state = initialState.tutors, action) => {
//   //   console.log(action.type);
//   //   console.log(action.payload);

//   switch (action.type) {
//     case 'tutors/addTutor':
//       return [...state, action.payload];
//     case 'tutors/deleteTutor':
//       return state.filter(tutor => tutor.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// cu toolkit
// fara create reducer
// export const tutorsReducer = (state = initialState.tutors, action) => {
//   //   console.log(action.type);
//   //   console.log(action.payload);

//   switch (action.type) {
//     case addTutor.type:
//       return [...state, action.payload];
//     case deleteTutor.type:
//       return state.filter(tutor => tutor.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// cu create reducer
// fara immer cu return
// export const tutorsReducer = createReducer(initialState.tutors, builder => {
//   builder
//     .addCase(addTutor, (state, action) => {
//       return [...state, action.payload];
//     })
//     .addCase(deleteTutor, (state, action) => {
//       return state.filter(tutor => tutor.id !== action.payload.id);
//     });
// });

// cu immer fara return
export const tutorsReducer = createReducer(initialState.tutors, builder => {
  builder
    .addCase(addTutor, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteTutor, (state, action) => {
      const index = state.findIndex(tutor => tutor.id === action.payload.id);
      state.splice(index, 1);
    });
});
