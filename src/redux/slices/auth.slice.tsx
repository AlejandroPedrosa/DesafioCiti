import {createSlice} from '@reduxjs/toolkit';
import {actionSignInEmail, actionSignOut} from '../../services/auth';

type AuthState = {
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(actionSignInEmail.fulfilled, (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
      };
    });
    builder.addCase(actionSignOut.fulfilled, (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
      };
    });
  },
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;
