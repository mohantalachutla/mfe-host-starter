import { mfeProduct } from 'mfes';
const { mfe, host } = mfeProduct.events;

export const consumes = {
  ...(mfe || {}),
};

export const produces = {
  ...(host || {}),
};
