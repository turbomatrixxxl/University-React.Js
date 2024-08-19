// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { tutorsReducer } from './tutors/reducers';
import { citiesReducer } from './cities/citiesSlice';
import { tutorsReducer } from './tutors/tutorsSlice';
import { configureStore } from '@reduxjs/toolkit';

//! fara toolkit
// export const rootReducer = combineReducers({
//   tutorsSlice: tutorsReducer,
// });

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

//* cu toolkit
export const store = configureStore({
  reducer: {
    tutorsSlice: tutorsReducer,
    citiesSlice: citiesReducer,
  },
});
