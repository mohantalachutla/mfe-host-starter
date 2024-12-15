import { createSlice } from '@reduxjs/toolkit';
import { getToken, setToken, removeToken } from '../utils/auth';
// import { Buffer } from 'buffer';

const initialState = {
  token: '',
  isLoggedIn: false,
  user: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    status: '',
    displayName: '',
    // displayPicture: Buffer.from('', 'base64').toString('ascii'), // Todo: polyfill for Buffer
    ssn: '',
    createdAt: '',
    updatedAt: '',
    roles: [],
    permissions: [],
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, { payload: { username, email, status, token } }) => {
      if (!token) {
        return;
      }
      setToken(token);
      state.user = {
        ...state.user,
        username,
        email,
        status,
      };
      state.isLoggedIn = !!getToken();
      state.token = token;
    },
    loginFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
    logout: (state) => {
      removeToken();
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default authSlice.reducer;
export const { loginSuccess, loginFailure, logout } = authSlice.actions;
