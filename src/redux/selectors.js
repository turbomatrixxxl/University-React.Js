//! fara asynkThunk
// export const getTutors = state => state.tutorsSlice;

//! fara asynkThunk
export const getCities = state => state.citiesSlice;

// * cu asynkThunk
export const getTutors = state => state.tutorsSlice.items;
export const getLoading = state => state.tutorsSlice.isLoading;
export const getError = state => state.tutorsSlice.error;

export const selectFaculties = state => state.facultiesSlice.items;
export const selectFacultiestLoading = state => state.facultiesSlice.isLoading;
export const selectFacultiesError = state => state.facultiesSlice.error;
