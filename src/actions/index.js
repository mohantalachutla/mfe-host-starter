import { createAction } from '@reduxjs/toolkit';

export const helloAction = createAction('hello/request', (payload) => ({
  payload,
}));

export const loginAction = createAction('login/request', (payload) => ({
  payload,
}));

export const registerAction = createAction('register/request', (payload) => ({
  payload,
}));
