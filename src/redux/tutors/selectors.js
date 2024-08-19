//! fara asynkThunk
// export const getTutors = state => state.tutorsSlice;

// * cu asynkThunk
export const getTutors = state => state.tutorsSlice.items;
export const getLoading = state => state.tutorsSlice.isLoading;
export const getError = state => state.tutorsSlice.error;
