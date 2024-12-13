import packageJson from '../../package.json';

export const verifyToken = (token) => {
  if (token) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return localStorage.getItem(packageJson.name + 'AccessToken');
};

export const isVerifiedUser = () => {
  return verifyToken(getToken());
};
