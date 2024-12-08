import { mfeStarter } from 'mfes';
const { mfe, host } = mfeStarter.events;

export const consumes = {
  ...(mfe || {}),
};

export const produces = {
  ...(host || {}),
};
