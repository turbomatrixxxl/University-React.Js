export const selectIsLoggedInAuth = state => state.authSlice.isLoggedIn;
export const selectUserAuth = state => state.authSlice.user;
export const selectIsLoadingAuth = state => state.authSlice.isLoading;
export const selectErrorAuth = state => state.authSlice.error;
export const selectTokenAuth = state => state.authSlice.token;
