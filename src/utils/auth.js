import { TOKEN_KEY } from '../env';

export const verifyToken = (token) => {
  if (token) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const isVerifiedUser = () => {
  return verifyToken(getToken());
};
