import { createSlice } from '@reduxjs/toolkit';
// import { Buffer } from 'buffer';

const initialState = {
  token: '',
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
    loginSuccess: (state, { payload: { user, token } }) => {
      state.user = {
        ...state.user,
        ...(user ?? {}),
      };
      state.token = token ?? '';
    },
    loginFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
    registerSuccess: (state, { payload: { user, token } }) => {
      state.user = {
        ...state.user,
        ...(user ?? {}),
      };
      state.token = token ?? '';
    },
    registerFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default authSlice.reducer;
export const { loginSuccess, loginFailure, registerSuccess, registerFailure } =
  authSlice.actions;
