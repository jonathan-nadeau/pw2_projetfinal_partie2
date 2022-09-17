import { createSlice } from '@reduxjs/toolkit';
import authReducers from './reducers';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: authReducers,
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
