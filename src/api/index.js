import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/hello');
};

export const login = ({ email, password }) => {
  return httpClient.post('/auth/login', { email, password });
};

export const register = ({ username, email, password }) => {
  return httpClient.post('/auth/register', { username, email, password });
};
