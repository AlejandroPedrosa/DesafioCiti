import {createAsyncThunk} from '@reduxjs/toolkit';
import {reset} from '../redux/slices/auth.slice';

export const actionSignInEmail = createAsyncThunk(
  'Auth/signIn',
  async ({email, password}: {email: string; password: string}, thunk) => {
    try {
      return thunk.fulfillWithValue(true);
    } catch (e) {
      thunk.rejectWithValue('Error ocurred');
    }
    return;
  },
);

export const actionSignOut = createAsyncThunk(
  'Auth/signout',
  async (_, thunk) => {
    try {
      thunk.dispatch(reset());
    } catch (e) {}
  },
);
