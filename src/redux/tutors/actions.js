// import { nanoid } from 'nanoid';
import { createAction, nanoid } from '@reduxjs/toolkit';

// fara toolkit
// export const addTutor = tutor => {
//   //   console.log(tutor);

//   return {
//     type: 'tutors/addTutor',
//     payload: {
//       id: nanoid(),
//       firstName: tutor.firstName,
//       lastName: tutor.lastName,
//       phone: tutor.phone,
//       email: tutor.email,
//       city: tutor.city,
//       options: tutor.options,
//       role: tutor.role,
//     },
//   };
// };

// cu toolkit
export const addTutor = createAction('tutors/addTutor', tutor => {
  return {
    payload: {
      id: nanoid(),
      ...tutor,
    },
  };
});

// fara toolkit
// export const deleteTutor = tutorId => {
//   console.log(tutorId);

//   return {
//     type: 'tutors/deleteTutor',
//     payload: {
//       id: tutorId,
//     },
//   };
// };

// cu toolkit
export const deleteTutor = createAction('tutors/deleteTutor', tutorId => {
  console.log(tutorId);

  return {
    payload: {
      id: tutorId,
    },
  };
});
